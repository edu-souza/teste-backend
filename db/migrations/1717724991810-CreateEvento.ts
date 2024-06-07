import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEvento1717724991810 implements MigrationInterface {
    name = 'CreateEvento1717724991810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "evento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying(100) NOT NULL, "descricao" text NOT NULL, "tipo" character varying(100) NOT NULL, "data" TIMESTAMP NOT NULL, "senha" character varying(30) NOT NULL, "hora" TIME, "diaSemana" character varying, "quantidadeParticipantes" integer NOT NULL, "bairro" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_ceb2e9607555230aee6aff546b0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "evento"`);
    }

}
