import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadeEntity } from './cidade.entity';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CidadeEntity, UsuarioEntity])],
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
