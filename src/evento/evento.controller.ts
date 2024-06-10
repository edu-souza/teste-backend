import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { EventoService } from './evento.service';
import { EventoDto } from './evento.dto';

@Controller('eventos')
export class EventoController {
  constructor(private eventoService: EventoService) { }

  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @Get('pagination')
  findPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.eventoService.findPagination(page, limit);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.eventoService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.remove(id);
  }

  @Post()
  create(@Body() dto: EventoDto) {
    return this.eventoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: EventoDto) {
    return this.eventoService.update({ id, ...dto });
  }
}
