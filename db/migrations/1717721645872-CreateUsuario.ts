import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsuario1717721645872 implements MigrationInterface {
    name = 'CreateUsuario1717721645872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "icone" text, "email" character varying(100) NOT NULL, "data_nascimento" TIMESTAMP NOT NULL, "senha" character varying(30) NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
