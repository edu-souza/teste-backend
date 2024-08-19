import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CidadeEntity } from './cidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Public } from 'src/auth/auth.metadata';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(CidadeEntity)
    private cidadeRepository: Repository<CidadeEntity>,
  ) {}

  findAll() {
    return this.cidadeRepository.find();
  }

  async findById(id: string): Promise<CidadeEntity> {
    const findOne = await this.cidadeRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Cidade não encontrada com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.cidadeRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto) {
    const newCidade = this.cidadeRepository.create(dto);
    return this.cidadeRepository.save(newCidade);
  }

  async update({ id, ...dto }) {
    await this.findById(id);
    return this.cidadeRepository.save({ id, ...dto });
  }
}
