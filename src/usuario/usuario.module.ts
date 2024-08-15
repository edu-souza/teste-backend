import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { HashService } from './hash.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  exports: [UsuarioService],
  controllers: [UsuarioController],
  providers: [UsuarioService, HashService],
})
export class UsuarioModule {}
