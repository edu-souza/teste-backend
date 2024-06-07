import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalidadeEntity } from './modalidade.entity';
import { ModalidadeService } from './modalidade.service';
import { ModalidadeController } from './modalidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModalidadeEntity])],
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
