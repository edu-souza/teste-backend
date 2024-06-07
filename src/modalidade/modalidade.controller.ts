import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

    import { ModalidadeService } from './modalidade.service';
    import { ModalidadeDto } from './modalidade.dto';
  
  @Controller('modalidades')
  export class ModalidadeController {
    constructor(private modalidadeService: ModalidadeService) {}
  
    @Get()
    findAll() {
      return this.modalidadeService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.modalidadeService.findById(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.modalidadeService.remove(id);
    }
  
    @Post()
    create(@Body() dto: ModalidadeDto) {
      return this.modalidadeService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ModalidadeDto) {
      return this.modalidadeService.update({ id, ...dto });
    }
  }
  