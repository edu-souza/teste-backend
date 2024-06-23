import { EventoEntity } from 'src/evento/evento.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modalidade' })
export class ModalidadeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'text', name: 'icone', nullable: true })
  icone: String;

  @OneToMany(() => EventoEntity, evento => evento.modalidade)
  eventos: EventoEntity[];

}
