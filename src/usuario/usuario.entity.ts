import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'text', name: 'icone', nullable: true })
  icone: String;

  @Column({ length: 100 })
  email: string;

  @Column({ name: 'data_nascimento'})
  dataNascimento: Date;

  @Column({ length: 30 })
  senha: string;
}
