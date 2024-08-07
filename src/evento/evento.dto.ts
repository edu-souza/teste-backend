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
  numero: string;

  @IsString()
  @IsOptional()
  complemento: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsUUID()
  @IsNotEmpty()
  cidadeId: string;

  @IsUUID()
  @IsNotEmpty()
  modalidade: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID("4", { each: true })
  @IsOptional()
  usuarioIds: string[];
}