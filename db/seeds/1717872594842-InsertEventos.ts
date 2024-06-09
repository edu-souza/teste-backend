import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertEventos1717872594842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO evento  " +
            '(id,titulo, descricao, tipo, data, senha, hora, "diaSemana", "quantidadeParticipantes", bairro, rua, numero, complemento, latitude, longitude, status,"cidadeId") ' +

            "VALUES  " +

            "('e86ab35b-38f7-441f-8919-07c3f640ec3d','Futebol Amador', 'Partida de futebol amador no campo do bairro.', 'recorrente', '2024-06-15 10:00:00', 'senha123', '10:00:00', 'Sábado', 20, 'Centro', 'Rua Coronel Pedro Benedet', '123', '', '-28.6838', '-49.3696', 'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('47934917-dbc8-4e70-8069-f757e6df96b5','Operário Nova X Mineira Velha', 'Futebol SUB 17', 'não recorrente', '2024-06-20 08:00:00', 'senha456', '08:00:00', 'Domingo', 50, 'Pio Corrêa', 'Rua João Cechinel', '456', '', '-28.6839', '-49.3704', 'E','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('59845769-bf27-4c34-9b90-c719be55c197','Basquete de Rua', 'Jogo de basquete de rua no bairro.', 'recorrente', '2024-06-22 17:00:00', 'senha678', '17:00:00', 'Terça-feira', 10, 'Santa Luzia', 'Rua São José', '987', '', '-28.6841', '-49.3785', 'I','ae0a90df-3b84-4c72-90fa-e60f1ec69932'), " +

            "('f5cecc69-f1f1-4b3b-a8c9-aef7788f6de0','Treinamento Vôlei', 'Sessão de treinamento de vôlei', 'recorrente', '2024-06-17 06:00:00', 'senha901', '06:00:00', 'Quinta-feira', 8, 'Argentina', 'Rua Luiz Lazzarin', '258', '', '-28.6883', '-49.3804', 'A','ae0a90df-3b84-4c72-90fa-e60f1ec69932')"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM evento WHERE id = 'e86ab35b-38f7-441f-8919-07c3f640ec3d';" +
            "DELETE FROM evento WHERE id = '47934917-dbc8-4e70-8069-f757e6df96b5';" +
            "DELETE FROM evento WHERE id = '59845769-bf27-4c34-9b90-c719be55c197';" +
            "DELETE FROM evento WHERE id = 'f5cecc69-f1f1-4b3b-a8c9-aef7788f6de0';"
        )
    }

}
