import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoEntity } from './evento.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { ModalidadeEntity } from 'src/modalidade/modalidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity, UsuarioEntity, ModalidadeEntity])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
