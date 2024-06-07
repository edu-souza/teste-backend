import {
    IsDateString,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    isURL,
  } from 'class-validator';
  
  export class ModalidadeDto {
    @IsUUID()
    @IsOptional()
    id: string;
  
    @IsString()
    @IsNotEmpty()
    nome: string;
  
    //@isURL()
    @IsOptional()
    icone: string;

  }
  