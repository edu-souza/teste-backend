import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'evento' })
export class EventoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  titulo: string;

  @Column({ type: 'text'})
  descricao: string;

  @Column({ length: 100 })
  tipo: string;

  @Column({})
  data: Date;

  @Column({ length: 30 })
  senha: string;

  @Column({ type: 'time', nullable: true})
  hora: Date;

  @Column({ nullable: true})
  diaSemana: string;

  @Column({ type: 'integer'})
  quantidadeParticipantes: number;

  @Column({})
  bairro: string;

  @Column({})
  rua: string;

  @Column({})
  numero: string;

  @Column({ nullable: true})
  complemento: string;

  @Column({ })
  latitude: string;

  @Column({})
  longitude: string;

  @Column({})
  status: string;

}
