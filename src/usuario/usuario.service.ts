import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from './usuario.dto';
import { Usuario } from './usuario.interface';
import { Public } from 'src/auth/auth.metadata';
import { HashService } from './hash.service';
import { MoreThan } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
    private hashService: HashService,
  ) { }

  findAll() {
    return this.usuarioRepository.find({relations: ['cidade']});
  }

  async findByEmail(email: string): Promise<UsuarioEntity> {
    const findOne = await this.usuarioRepository.findOne({ 
      where: { email },
      relations: ['cidade'], 
    });
    if (!findOne) {
      throw new NotFoundException('Usuário não encontrado com o email ' + email);
    }
    return findOne;
  }

  async findById(id: string): Promise<UsuarioEntity> {
    const findOne = await this.usuarioRepository.findOne({ 
      where: { id },
      relations: ['cidade'], // Adicionando a relação 'cidade' aqui
    });
    if (!findOne) {
      throw new NotFoundException('Usuário não encontrado com o id ' + id);
    }
    return findOne;
  }

  async findByResetCode(resetCode: string): Promise<UsuarioEntity> {
    const currentDateTime = new Date();
    
    const findOne = await this.usuarioRepository.findOne({
      where: {
        passwordResetCode: resetCode,
        passwordResetExpiration: MoreThan(currentDateTime), // Usando MoreThan para verificar se o código não expirou
      },
      relations: ['cidade'],
    });
    
    if (!findOne) {
      throw new NotFoundException('Código de redefinição inválido ou expirado.');
    }
    
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.usuarioRepository.remove(findById);
    return { ...findById, id };
  }

  @Public()
  async create(dto: UsuarioDto) {
    await this.validaUsuario(dto);

    // Criptografando a senha antes de salvar
    dto.senha = await this.hashService.hashPassword(dto.senha);

    const newUsuario = this.usuarioRepository.create(dto);
    return this.usuarioRepository.save(newUsuario);
  }

  async update(dto: UsuarioDto) {
    await this.findById(dto.id);
    await this.validaUsuario(dto)

    // Se a senha foi atualizada, estamos criptografando antes de salvar
    if (dto.senha) {
      dto.senha = await this.hashService.hashPassword(dto.senha);
    }

    return this.usuarioRepository.save(dto);
  }

  private async validaUsuario(usuario: UsuarioEntity | UsuarioDto) {
    this.validaDataNasc(usuario);
    await this.validaEmail(usuario);
    this.validaSenha(usuario);
  }

  private validaDataNasc(usuario: UsuarioEntity | UsuarioDto) {
    const dataAtual = new Date();
    const dataNascimento = new Date(usuario.dataNascimento);
    if (dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear() < 16) {
      throw new BadRequestException('O usuário deve ter no mínimo 16 anos');
    };
  }

  private async validaEmail(dto: UsuarioEntity | UsuarioDto) {
    const usuarioExist = await this.usuarioRepository.findOne({ where: { email: dto.email } });
    if (usuarioExist && usuarioExist.id !== dto.id) {
      throw new BadRequestException('Email já está em uso');
    }
  }

  private validaSenha(dto: UsuarioEntity | UsuarioDto) {
    if (typeof dto.senha !== 'string') {
      throw new BadRequestException('Senha não fornecida ou não é uma string.');
    }
  
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/;
    if (!dto.senha.match(regex)) {
      throw new BadRequestException('A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
    }
  }

  async saveRefreshToken(userId: string, refreshtoken: string): Promise<void> {
    await this.usuarioRepository.update(userId, { refreshtoken });
  }

  async removeRefreshtoken(userId: string): Promise<void> {
    await this.usuarioRepository.update(userId, { refreshtoken: null });
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<void> {
    const user = await this.usuarioRepository.findOne({ where: { id: userId } });
    if (user) {
      user.senha = hashedPassword;
      await this.usuarioRepository.save(user);
    }
  }
  
  async savePasswordResetCode(userId: string, resetCode: string, expirationDate: Date): Promise<void> {
    await this.usuarioRepository.update(userId, {
      passwordResetCode: resetCode,
      passwordResetExpiration: expirationDate,
    });
  }

  async clearPasswordResetCode(userId: string): Promise<void> {
    await this.usuarioRepository.update(userId, {
      passwordResetCode: null,
      passwordResetExpiration: null,
    });
  }


}
