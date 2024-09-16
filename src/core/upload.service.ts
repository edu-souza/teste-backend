import { BadRequestException, Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class UploadService {
  uploadLocal(file: Express.Multer.File): string {
    // Usa o nome original do arquivo sem modificar
    const filename = file.filename;
    const filePath = `${filename}`;
    
    return filePath;
  }

  async deleteFile(filename: string): Promise<void> {
    const filePath = `./uploads/${filename}`;
    try {
      await fs.unlink(filePath); // Exclui o arquivo do sistema de arquivos
    } catch (error) {
      console.error(`Erro ao excluir o arquivo ${filename}:`, error);
      throw new BadRequestException('Erro ao excluir o arquivo.');
    }
  }
}