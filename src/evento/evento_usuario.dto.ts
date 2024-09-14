import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { EventoEntity } from './evento.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

export class EventoUsuarioDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  statusParticipante: string;

  @IsUUID()
  @IsNotEmpty()
  evento: EventoEntity;

  @IsUUID()
  @IsNotEmpty()
  usuario: UsuarioEntity;
}
