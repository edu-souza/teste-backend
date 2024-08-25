import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertModalidade1717801456258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('5751520f-04b6-4777-a70f-6835f6744808', 'Corrida', 'corrida.svg');" +

            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('b82f46cd-d7eb-4b0c-b331-069b1fe7935f', 'Musculacao', 'musculacao.svg');" +

            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('1ac19240-dd74-48c8-9d8c-f98a82f964dc', 'Vôlei', 'volei.svg');" +

            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('126095f4-054f-4d9f-9558-a5cef8c41849', 'Basquete', 'basquete.svg');" +

            "INSERT INTO modalidade (id, nome, icone) VALUES " +
            "('0c50f003-1f5d-4700-ac69-3ae3fc9ed913', 'Futebol', 'rugby.svg')" 
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM modalidade WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'; " +
            "DELETE FROM modalidade WHERE id = 'b82f46cd-d7eb-4b0c-b331-069b1fe7935f'; " +
            "DELETE FROM modalidade WHERE id = '1ac19240-dd74-48c8-9d8c-f98a82f964dc'"
        );
    }

}
