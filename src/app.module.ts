import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ModalidadeModule } from './modalidade/modalidade.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ModalidadeModule,
    UsuarioModule,
    EventoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
