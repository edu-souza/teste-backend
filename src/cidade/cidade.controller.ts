import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

    import { CidadeService } from './cidade.service';
  
  @Controller('cidades')
  export class CidadeController {
    constructor(private cidadeService: CidadeService) {}
  
    @Get()
    findAll() {
      return this.cidadeService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.cidadeService.findById(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.cidadeService.remove(id);
    }
  
    @Post()
    create(@Body() dto) {
      return this.cidadeService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto) {
      return this.cidadeService.update({ id, ...dto });
    }
  }
  