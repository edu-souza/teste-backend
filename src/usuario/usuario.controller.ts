import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { diskStorage } from 'multer';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuario.dto';
import { Public } from 'src/auth/auth.metadata';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usuarioService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }

  @Public()
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const filename = `${Date.now()}${extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() foto: Express.Multer.File) {
    if (!foto) {
      throw new BadRequestException('Arquivo não enviado');
    }
    return { filename: foto.filename };
  }

  @Public()
  @Post()
  async create(@Body() body: UsuarioDto) {
    // Adiciona a imagem se estiver presente
    if (body.imagem) {
      body.imagem = `${body.imagem}`;
    }

    return this.usuarioService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UsuarioDto) {
    return this.usuarioService.update({ id, ...dto });
  }
}
