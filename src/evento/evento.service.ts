import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { EventoEntity } from './evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoDto } from './evento.dto';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(EventoEntity)
    private eventoRepository: Repository<EventoEntity>,

    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
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
    await this.validaEvento(dto);
    const newEvento = this.eventoRepository.create(dto);
    return this.eventoRepository.save(newEvento);
  }

  async update({ id, ...dto }: EventoDto) {
    await this.findById(id);
    this.validaEvento({id, ...dto})
    return this.eventoRepository.save({ id, ...dto });
  }

  private validaEvento(evento: EventoDto) {
    this.validaDataEvento(evento);
    this.validaSeExisteParticipante(evento);
    this.validaStatusEvento(evento);
    this.validaStatusParaAdicionarParticipante(evento.id);
    this.validaLimiteParticipantes(evento);
    this.validaTipoEvento(evento);
  }

  private validaDataEvento(evento: EventoEntity | EventoDto) {
    const dataAtual = new Date();
    if (evento.data < dataAtual && evento.tipo == 'não recorrente'){
      throw new BadRequestException('A data do evento deve ser maior que a data atual.');
    }
    
  }

  private validaTipoEvento(evento: EventoEntity | EventoDto) {
    if (evento.tipo === 'recorrente' && !evento.diaSemana) {
      throw new BadRequestException('Para eventos recorrentes, é necessário preencher o campo "dia da semana".');
    }
  }

  private validaDescricao(evento: EventoEntity | EventoDto) {
    if (evento.descricao.length < 20) {
      throw new BadRequestException('A descrição do evento deve ter no mínimo 20 caracteres.');
    }
  }

  private async validaSeExisteParticipante(evento: EventoDto) {
    if (!evento.usuarioIds || evento.usuarioIds.length === 0) {
      return;
    }

    const usuarios = await this.usuarioRepository.find({
      where: {id: In(evento.usuarioIds)}
    });

    if (usuarios.length !== evento.usuarioIds.length) {
      throw new BadRequestException('Um ou mais participantes não existem.');
    }
  }

  private validaStatusEvento(dto: EventoDto, existingEvent?: EventoEntity) {
    const statusInativos = ['I', 'E'];
    if (statusInativos.includes(dto.status.toLowerCase())) {
      throw new BadRequestException('Não é permitido criar eventos inativos ou encerrados.');
    }
    if (existingEvent && statusInativos.includes(existingEvent.status) && dto.status !== existingEvent.status) {
      throw new BadRequestException('Não é permitido alterar o status de eventos inativos ou encerrados.');
    }
  }

  private async validaStatusParaAdicionarParticipante(eventoId: string) {
    const evento = await this.findById(eventoId);
    const statusInativos = ['I', 'E'];
    if (statusInativos.includes(evento.status.toUpperCase())) {
      throw new BadRequestException('Não é permitido adicionar participantes a eventos inativos ou encerrados.');
    }
  }

  private async validaLimiteParticipantes(evento: EventoDto) {
    const eventoExistente = await this.findById(evento.id);
    const numeroParticipantesAtual = eventoExistente.usuarios ? eventoExistente.usuarios.length : 0;
    const numeroParticipantesNovos = evento.usuarioIds ? evento.usuarioIds.length : 0;

    if (numeroParticipantesAtual + numeroParticipantesNovos > eventoExistente.quantidadeParticipantes) {
      throw new BadRequestException('A quantidade de participantes excede o limite do evento.');
    }
  }

}
