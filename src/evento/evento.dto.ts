import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
  Length,
  isArray,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';
import { ModalidadeEntity } from 'src/modalidade/modalidade.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { CidadeEntity } from 'src/cidade/cidade.entity';

export class EventoDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  tipo: string;

  @IsDate()
  @IsNotEmpty()
  data: Date;

  @IsDate()
  @IsOptional()
  hora: Date;

  @IsString()
  @IsOptional()
  diaSemana: string;

  @IsNumber()
  @IsNotEmpty()
  quantidadeParticipantes: number;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsString()
  @IsNotEmpty()
  latitude: string;
  
  @IsString()
  @IsNotEmpty()
  longitude: string;
  
  @IsString()
  @IsNotEmpty()
  imagem: string;
  
  @IsString()
  @IsNotEmpty()
  admin: string;

  @IsString()
  @IsNotEmpty()
  numero: string;

  @IsString()
  @IsOptional()
  complemento: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsUUID()
  @IsNotEmpty()
  cidadeId: CidadeEntity;

  @IsUUID()
  @IsNotEmpty()
  modalidade: ModalidadeEntity;

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID("4", { each: true })
  @IsOptional()
  usuarioIds: UsuarioEntity[];
}