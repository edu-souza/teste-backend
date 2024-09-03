import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertModalidade1717801456258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('5751520f-04b6-4777-a70f-6835f6744808', 'Baseball', 'baseball.svg')," +
            "('b82f46cd-d7eb-4b0c-b331-069b1fe7935f', 'Basquete', 'basquete.svg')," +
            "('1ac19240-dd74-48c8-9d8c-f98a82f964dc', 'Bowling', 'bowling-ball-outline.svg')," +
            "('126095f4-054f-4d9f-9558-a5cef8c41849', 'Caminhada', 'caminhada.svg')," +
            "('0c50f003-1f5d-4700-ac69-3ae3fc9ed913', 'Corrida', 'corrida.svg')," +
            "('2d091fac-e1d5-4d7e-b123-a2c3de2e36d8', 'Futebol Americano', 'futebol-americano.svg')," +
            "('3e4e1d35-5f67-42f4-8473-1f9b19d814b7', 'Futebol', 'futebol.svg')," +
            "('4c7d2f5b-6d8e-4f5c-9783-cb5d8fa1e4b0', 'Handebol', 'handebol.svg')," +
            "('5d8f0e4b-7e9f-4f9a-9b8d-df7d9f8a2bcb', 'Musculação', 'musculacao.svg')," +
            "('6e9a1f4c-8e1f-4f9b-ab9d-e7a9f9b8e2cd', 'Natação', 'natacao.svg')," +
            "('7f0a2f5d-9f2e-4fab-ab0d-f8b9e0a1f3d2', 'Rugby', 'rugby.svg')," +
            "('8a1b3c4d-ae5f-4fc1-b9cd-ef1a2b3c4d5f', 'Skate', 'skate.svg')," +
            "('09fd02ce-0cd8-45fc-9dc0-111e2a4bdad3', 'Tênis', 'tenis.svg')," +
            "('3473971e-2c67-4bcd-8277-44cc7ffb3999', 'Tênis de Mesa', 'tennisball-outline.svg')," +
            "('4270dc09-9a7f-400f-92f7-47352f62c60f', 'Vôlei', 'volei.svg')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM modalidade WHERE id IN (" +
            "'5751520f-04b6-4777-a70f-6835f6744808', " +
            "'b82f46cd-d7eb-4b0c-b331-069b1fe7935f', " +
            "'1ac19240-dd74-48c8-9d8c-f98a82f964dc', " +
            "'126095f4-054f-4d9f-9558-a5cef8c41849', " +
            "'0c50f003-1f5d-4700-ac69-3ae3fc9ed913', " +
            "'2d091fac-e1d5-4d7e-b123-a2c3de2e36d8', " +
            "'3e4e1d35-5f67-42f4-8473-1f9b19d814b7', " +
            "'4c7d2f5b-6d8e-4f5c-9783-cb5d8fa1e4b0', " +
            "'5d8f0e4b-7e9f-4f9a-9b8d-df7d9f8a2bcb', " +
            "'6e9a1f4c-8e1f-4f9b-ab9d-e7a9f9b8e2cd', " +
            "'7f0a2f5d-9f2e-4fab-ab0d-f8b9e0a1f3d2', " +
            "'8a1b3c4d-ae5f-4fc1-b9cd-ef1a2b3c4d5f', " +
            "'09fd02ce-0cd8-45fc-9dc0-111e2a4bdad3', " +
            "'3473971e-2c67-4bcd-8277-44cc7ffb3999', " +
            "'4270dc09-9a7f-400f-92f7-47352f62c60f'" +
            ");"
        );
    }

}
