import { CidadeEntity } from 'src/cidade/cidade.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({})
  bairro: string;

  @Column({})
  rua: string;

  @Column({})
  numero: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({})
  status: string;

  @ManyToOne(() => CidadeEntity, cidade => cidade.eventos)
  cidade: CidadeEntity;

  @ManyToMany(() => UsuarioEntity, usuario => usuario.eventos)
  @JoinTable({
    name: 'evento_usuarios',
    joinColumn: { name: 'evento_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'usuario_id', referencedColumnName: 'id' }
  })
  usuarios: UsuarioEntity[];
}
