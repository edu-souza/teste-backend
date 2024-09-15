import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    // Configure o transporte do Nodemailer
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',  // Exemplo de host, substitua pelo seu servidor de e-mails
      port: 587,
      secure: false,  // true para 465, false para outros
      auth: {
        user: 'contatotribofit@gmail.com',  // Substitua com seu e-mail ou usuário
        pass: 'jxcw dosh zuud mvkj',  // Substitua com sua senha
      },
    });
  }

  async sendMail(mailOptions: { to: string, subject: string, text: string }) {

    const { to, subject, text } = mailOptions;

    const options = {
      from: '"Contato TriboFit" <contatotribofit@gmail.com', // Seu e-mail
      to: to,
      subject: subject,
      text: text,
    };

    // Envia o e-mail
    await this.transporter.sendMail(options);
  }
}
