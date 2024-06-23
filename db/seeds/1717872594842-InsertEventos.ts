import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertEventos1717872594842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO evento  " +
            '(id,titulo, descricao, tipo, data, hora, "diaSemana", "quantidadeParticipantes", bairro, rua, numero, complemento, status,"cidadeId") ' +

            "VALUES  " +

            "('e86ab35b-38f7-441f-8919-07c3f640ec3d','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'não recorrente', '2024-06-15 10:00:00', '10:00:00', '', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('9cda0921-815d-4a1e-b022-a1395ab0b9e1','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet', '100','','A','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('5ecbae43-e74c-4628-a437-fad673c849d9','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '',  'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('3f4e0ebf-3bd0-4bd7-8719-8396e7925563','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'I','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('89bdf63f-1676-4c36-9bf7-9b72001ff05c','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100', '', 'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('409ac200-9c51-4a78-8449-b92a7827ad8b','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet','100','',  'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932') "
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM evento WHERE id = 'e86ab35b-38f7-441f-8919-07c3f640ec3d';" +
            "DELETE FROM evento WHERE id = '9cda0921-815d-4a1e-b022-a1395ab0b9e1';" +
            "DELETE FROM evento WHERE id = '5ecbae43-e74c-4628-a437-fad673c849d9';" +
            "DELETE FROM evento WHERE id = '3f4e0ebf-3bd0-4bd7-8719-8396e7925563';" +
            "DELETE FROM evento WHERE id = '89bdf63f-1676-4c36-9bf7-9b72001ff05c';" +
            "DELETE FROM evento WHERE id = '409ac200-9c51-4a78-8449-b92a7827ad8b';"
        )
    }

}
