import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionarImagem1723505787240 implements MigrationInterface {
    name = 'AdicionarImagem1723505787240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "imagem" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "imagem"`);
    }

}
