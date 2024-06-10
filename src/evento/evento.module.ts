import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoEntity } from './evento.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity, UsuarioEntity])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
