import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModalidade1717635562620 implements MigrationInterface {
    name = 'CreateModalidade1717635562620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modalidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "icone" text, CONSTRAINT "PK_6ed9e01b68c48e129e0e41fc202" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "modalidade"`);
    }

}
