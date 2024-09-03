import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CidadeEntity } from 'src/cidade/cidade.entity';
import { ModalidadeEntity } from 'src/modalidade/modalidade.entity';
import { EventoUsuarioEntity } from 'src/evento_usuario/evento_usuario.entity';

@Entity({ name: 'evento' })
export class EventoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  titulo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ length: 100 })
  tipo: string;

  @Column({})
  data: Date;

  @Column({ type: 'time', nullable: true })
  hora: Date;

  @Column({ nullable: true })
  diaSemana: string;

  @Column({ type: 'integer' })
  quantidadeParticipantes: number;

  @Column({ nullable: true })
  latitude: string;

  @Column({ nullable: true })
  longitude: string;

  @Column({ type: 'text', nullable: true })
  imagem: string;

  @Column({ nullable: true })
  admin: string;

  @Column({})
  bairro: string;

  @Column({})
  rua: string;

  @Column({ nullable: true })
  numero: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({})
  status: string;

  @Column({})
  status_aprov: string;

  @ManyToOne(() => CidadeEntity, cidade => cidade.eventos)
  cidade: CidadeEntity;

  @ManyToOne(() => ModalidadeEntity, modalidade => modalidade.eventos)
  @JoinColumn({ name: 'modalidadeId' })
  modalidade: ModalidadeEntity;

  @OneToMany(() => EventoUsuarioEntity, eventoUsuario => eventoUsuario.evento)
  eventosUsuarios: EventoUsuarioEntity[];
}