import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { EventoEntity } from './evento.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoDto } from './evento.dto';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(EventoEntity)
    private eventoRepository: Repository<EventoEntity>,
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>
  ) { }

  findAll() {
    return this.eventoRepository.find();
  }

  async findPagination(page: number, limit: number) {
    const [result, total] = await this.eventoRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: result,
      count: total,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<EventoEntity> {
    const findOne = await this.eventoRepository.findOne({
      where: { id },
      relations: { usuarios: true },
    });
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
    await this.validaEvento(dto);
    const newEvento = this.eventoRepository.create(dto);
    return this.eventoRepository.save(newEvento);
  }

  async update(evento: EventoDto) {
    await this.findById(evento.id);
    return this.eventoRepository.save(evento);
  }

  private async validaEvento(evento: EventoDto) {
    this.validaPrenchimentoCampos(evento);
    this.validaSeExisteParticipante(evento);
    this.validaDataEvento(evento);
    await this.validaStatusEvento(evento);
    this.validaTipoEvento(evento);
    this.validaDescricao(evento);
  }

  private validaDataEvento(evento: EventoEntity | EventoDto) {
    const dataAtual = new Date();
    const dataEvento = new Date(evento.data);
    if (dataEvento < dataAtual && evento.tipo == 'não recorrente') {
      throw new BadRequestException(
        'Para eventos não recorrentes, a data do evento deve ser maior ou igual à que a data atual.',
      );
    }
  }

  private validaTipoEvento(evento: EventoEntity | EventoDto) {
    if (evento.tipo === 'recorrente' && !evento.diaSemana) {
      throw new BadRequestException(
        'Para eventos recorrentes, é necessário preencher o campo Dia da semana.',
      );
    }
  }

  private validaDescricao(evento: EventoEntity | EventoDto) {
    if (evento.descricao.length < 20) {
      throw new BadRequestException(
        'A descrição do evento deve ter no mínimo 20 caracteres.',
      );
    }
  }

  private validaSeExisteParticipante(evento: EventoDto) {
    if (evento.quantidadeParticipantes < 1) {
      throw new BadRequestException(
        'Limite mínimo de 1 participante no evento.',
      );
    }
  }

  private validaStatusEvento(dto: EventoDto) {
    const statusInativos = ['I', 'E'];
    if (statusInativos.includes(dto.status.toUpperCase())) {
      throw new BadRequestException(
        'Não é permitido criar ou alterar eventos inativos ou encerrados.',
      );
    }
  }

  private validaPrenchimentoCampos(evento: EventoDto) {
    if (!evento.titulo || !evento.descricao || !evento.tipo || !evento.data) {
      throw new BadRequestException(
        'Alguns campos obrigatórios não foram preenchidos.',
      );
    }
  }
}
