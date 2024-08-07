import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertEventos1717872594842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO evento " +
            '(id, titulo, descricao, tipo, data, hora, "diaSemana", "quantidadeParticipantes", bairro, rua, numero, complemento, status, "cidadeId", "modalidadeId") ' +
            "VALUES " +
            "('e86ab35b-38f7-441f-8919-07c3f640ec3d','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'não recorrente', '2024-06-15 10:00:00', '10:00:00', '', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'A', 'ae0a90df-3b84-4c72-90fa-e60f1ec69932', '5751520f-04b6-4777-a70f-6835f6744808')," +
            "('5ecbae43-e74c-4628-a437-fad673c849d9','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'A', 'ae0a90df-3b84-4c72-90fa-e60f1ec69932', '5751520f-04b6-4777-a70f-6835f6744808'), " +
            "('3f4e0ebf-3bd0-4bd7-8719-8396e7925563','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'I', 'ae0a90df-3b84-4c72-90fa-e60f1ec69932', '5751520f-04b6-4777-a70f-6835f6744808')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM evento WHERE id = 'e86ab35b-38f7-441f-8919-07c3f640ec3d';" +
            "DELETE FROM evento WHERE id = '5ecbae43-e74c-4628-a437-fad673c849d9';" +
            "DELETE FROM evento WHERE id = '3f4e0ebf-3bd0-4bd7-8719-8396e7925563';"
        );
    }

}
