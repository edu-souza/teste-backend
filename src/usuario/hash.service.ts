import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashService {
  private readonly saltRounds = 10;

  async hashPassword(senha: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(senha, salt);
  }

  async comparePasswords(senha: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(senha, hash);
  }
}