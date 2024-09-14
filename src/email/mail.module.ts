import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mailService';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp-mail.outlook.com', // SMTP server do Outlook.com (Hotmail usa o mesmo)
        port: 587,
        secure: false, // false para STARTTLS
        auth: {
          user: 'lucasdesouzadarosa@hotmail.com', // Seu e-mail @hotmail.com
          pass: '752486319@@Dog', // Sua senha do e-mail Hotmail
        },
      },
      defaults: {
        from: '"No Reply" <lucasdesouzadarosa@hotmail.com>', // O e-mail de origem dos e-mails enviados
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
