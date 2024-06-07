import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from './usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

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
    const newUsuario = this.usuarioRepository.create(dto);
    return this.usuarioRepository.save(newUsuario);
  }

  async update({ id, ...dto }: UsuarioDto) {
    await this.findById(id);
    return this.usuarioRepository.save({ id, ...dto });
  }
}
