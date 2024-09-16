import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuario.dto';
import { Public } from 'src/auth/auth.metadata';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { Response } from 'express';
import { promises as fs } from 'fs';

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
  @Post()
  @UseInterceptors(
    FileInterceptor('imagem', {
      storage: diskStorage({
        destination: './uploads', // Define o local de armazenamento da imagem
        filename: (req, file, callback) => {
          const filename = `${Date.now()}${extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    }),
  )
  
  async create(
    @Body() body: UsuarioDto, 
    @UploadedFile() imagem: Express.Multer.File
  ) {
    // Chamar o serviço passando ambos os argumentos
    return this.usuarioService.create(body, imagem);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('imagem', {
      storage: diskStorage({
        destination: './uploads', // Define o local de armazenamento da imagem
        filename: (req, file, callback) => {
          const filename = `${Date.now()}${extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async update(
    @Param('id') id: string, 
    @Body() dto: UsuarioDto, 
    @UploadedFile() imagem?: Express.Multer.File
  ) {
    return this.usuarioService.update({ id, ...dto }, imagem);
  }

  @Get('imagem/:filename')
  getImagem(@Param('filename') filename: string, @Res() res: Response){
    return res.sendFile(filename, {root: './uploads'});
  } 
}