import { CidadeEntity } from 'src/cidade/cidade.entity';
import { EventoEntity } from 'src/evento/evento.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ name: 'data_nascimento'})
  dataNascimento: Date;

  @Column({ length: 255 })
  senha: string;

  @Column({ type: 'text', nullable: true })
  imagem: string;

  @ManyToOne(() => CidadeEntity, cidade => cidade.usuarios)
  cidade: CidadeEntity;

  @ManyToMany(() => EventoEntity, evento => evento.usuarios)
  eventos: EventoEntity[];
}
