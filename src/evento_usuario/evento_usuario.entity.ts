import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { EventoEntity } from 'src/evento/evento.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity({ name: 'evento_usuarios' })
export class EventoUsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => EventoEntity, evento => evento.eventosUsuarios, { eager: true })
  evento: EventoEntity;

  @ManyToOne(() => UsuarioEntity, usuario => usuario.eventosUsuarios, { eager: true })
  usuario: UsuarioEntity;

  @Column({ name: 'status_participante', length: 1 })
  statusParticipante: string;
}