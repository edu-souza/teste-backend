import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    IsDate,
  } from 'class-validator';
  
  export class EventoDto {
    @IsUUID()
    @IsOptional()
    id: string;
  

  }
  