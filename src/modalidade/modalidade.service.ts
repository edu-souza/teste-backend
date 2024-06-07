import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ModalidadeEntity } from './modalidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ModalidadeDto } from './modalidade.dto';

@Injectable()
export class ModalidadeService {
  constructor(
    @InjectRepository(ModalidadeEntity)
    private modalidadeRepository: Repository<ModalidadeEntity>,
  ) {}

  findAll() {
    return this.modalidadeRepository.find();
  }

  async findById(id: string): Promise<ModalidadeEntity> {
    const findOne = await this.modalidadeRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Modalidade não encontrada com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.modalidadeRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: ModalidadeDto) {
    const newModalidade = this.modalidadeRepository.create(dto);
    return this.modalidadeRepository.save(newModalidade);
  }

  async update({ id, ...dto }: ModalidadeDto) {
    await this.findById(id);
    return this.modalidadeRepository.save({ id, ...dto });
  }
}
