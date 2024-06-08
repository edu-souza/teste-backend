import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCidade1717805250220 implements MigrationInterface {
    name = 'CreateCidade1717805250220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "estado" character NOT NULL, CONSTRAINT "PK_9fefdadd1d47000e7fa6d2abc8c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cidade"`);
    }

}
