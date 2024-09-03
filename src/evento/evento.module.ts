import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoEntity } from './evento.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { ModalidadeEntity } from 'src/modalidade/modalidade.entity';
import { EventoUsuarioEntity } from 'src/evento_usuario/evento_usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity, UsuarioEntity, ModalidadeEntity,EventoUsuarioEntity])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
