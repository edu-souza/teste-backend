import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  exports: [UsuarioService],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
