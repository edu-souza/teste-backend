import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from './usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) { }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findById(id: string): Promise<UsuarioEntity> {
    const findOne = await this.usuarioRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Usuario não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.usuarioRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: UsuarioDto) {
    await this.validaUsuario(dto);
    const newUsuario = this.usuarioRepository.create(dto);
    return this.usuarioRepository.save(newUsuario);
  }

  async update(dto: UsuarioDto) {
    await this.findById(dto.id);
    await this.validaUsuario(dto)
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
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/;
    if (!dto.senha.match(regex)) {
      throw new BadRequestException('A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
    }
  }
}
