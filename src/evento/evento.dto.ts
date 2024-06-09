import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
  IsLatitude,
  IsLongitude,
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

  @IsString()
  @Length(1, 30)
  @IsNotEmpty()
  senha: string;

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

  @IsLatitude()
  @IsNotEmpty()
  latitude: string;

  @IsLongitude()
  @IsNotEmpty()
  longitude: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsUUID()
  @IsNotEmpty()
  cidadeId: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID("4", { each: true })
  @IsOptional()
  usuarioIds: string[];
}