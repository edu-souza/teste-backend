import { CidadeEntity } from 'src/cidade/cidade.entity';
import { ModalidadeEntity } from 'src/modalidade/modalidade.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({nullable: true})
  latitude: string;

  @Column({nullable: true})
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
  @JoinColumn({ name: 'modalidadeId' })  // Adicione esta linha
  modalidade: ModalidadeEntity;

  @ManyToMany(() => UsuarioEntity, usuario => usuario.eventos)
  @JoinTable({
    name: 'evento_usuarios',
    joinColumn: { name: 'evento_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'usuario_id', referencedColumnName: 'id' }
  })
  usuarios: UsuarioEntity[];
}