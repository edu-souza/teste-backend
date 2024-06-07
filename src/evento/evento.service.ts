import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EventoEntity } from './evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoDto } from './evento.dto';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(EventoEntity)
    private eventoRepository: Repository<EventoEntity>,
  ) {}

  findAll() {
    return this.eventoRepository.find();
  }

  async findById(id: string): Promise<EventoEntity> {
    const findOne = await this.eventoRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Evento não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.eventoRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: EventoDto) {
    const newEvento = this.eventoRepository.create(dto);
    return this.eventoRepository.save(newEvento);
  }

  async update({ id, ...dto }: EventoDto) {
    await this.findById(id);
    return this.eventoRepository.save({ id, ...dto });
  }
}
