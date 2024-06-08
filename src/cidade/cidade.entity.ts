import { EventoEntity } from 'src/evento/evento.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cidade' })
export class CidadeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({})
  nome: string;

  @Column({ type: 'char'})
  estado: string;

  @OneToMany(() => UsuarioEntity, usuario => usuario.cidade)
  usuarios: UsuarioEntity[];

  @OneToMany(() => EventoEntity, evento => evento.cidade)
  eventos: EventoEntity[];
}
