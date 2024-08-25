import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1724108925338 implements MigrationInterface {
    name = 'Migrations1724108925338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modalidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "icone" text, CONSTRAINT "PK_6ed9e01b68c48e129e0e41fc202" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying(100) NOT NULL, "descricao" text NOT NULL, "tipo" character varying(100) NOT NULL, "data" TIMESTAMP NOT NULL, "hora" TIME, "diaSemana" character varying, "quantidadeParticipantes" integer NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "imagem" text, "admin" character varying, "bairro" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying, "status" character varying NOT NULL, "status_aprov" character varying NOT NULL, "cidadeId" uuid, "modalidadeId" uuid, CONSTRAINT "PK_ceb2e9607555230aee6aff546b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "estado" character(2) NOT NULL, CONSTRAINT "PK_9fefdadd1d47000e7fa6d2abc8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "data_nascimento" TIMESTAMP NOT NULL, "senha" character varying(255) NOT NULL, "imagem" text, "cidadeId" uuid, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evento_usuarios" ("evento_id" uuid NOT NULL, "usuario_id" uuid NOT NULL, CONSTRAINT "PK_032fdf47dc67d534e72661ad253" PRIMARY KEY ("evento_id", "usuario_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3763ec4c7acba6b0642c9b4215" ON "evento_usuarios" ("evento_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_57218ceef2c05eb63891a58bd1" ON "evento_usuarios" ("usuario_id") `);
        await queryRunner.query(`ALTER TABLE "evento" ADD CONSTRAINT "FK_245693914452ab1f730af0cfb1c" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evento" ADD CONSTRAINT "FK_6703a705bc477df2e419304adc3" FOREIGN KEY ("modalidadeId") REFERENCES "modalidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_f15ef5e406fe408e921573c7ad8" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evento_usuarios" ADD CONSTRAINT "FK_3763ec4c7acba6b0642c9b42156" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "evento_usuarios" ADD CONSTRAINT "FK_57218ceef2c05eb63891a58bd13" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evento_usuarios" DROP CONSTRAINT "FK_57218ceef2c05eb63891a58bd13"`);
        await queryRunner.query(`ALTER TABLE "evento_usuarios" DROP CONSTRAINT "FK_3763ec4c7acba6b0642c9b42156"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_f15ef5e406fe408e921573c7ad8"`);
        await queryRunner.query(`ALTER TABLE "evento" DROP CONSTRAINT "FK_6703a705bc477df2e419304adc3"`);
        await queryRunner.query(`ALTER TABLE "evento" DROP CONSTRAINT "FK_245693914452ab1f730af0cfb1c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_57218ceef2c05eb63891a58bd1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3763ec4c7acba6b0642c9b4215"`);
        await queryRunner.query(`DROP TABLE "evento_usuarios"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "cidade"`);
        await queryRunner.query(`DROP TABLE "evento"`);
        await queryRunner.query(`DROP TABLE "modalidade"`);
    }

}
