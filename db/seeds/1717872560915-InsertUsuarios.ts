import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertUsuarios1717872560915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO usuario (id, nome, icone, email, data_nascimento, senha) VALUES ('123e4567-e89b-12d3-a456-426614174000', 'João Silva', 'imagemUsuario1.png', 'joao.silva@gmail.com', '1990-01-15 00:00:00', 'senha123'); " +
            "INSERT INTO usuario (id, nome, icone, email, data_nascimento, senha) VALUES ('223e4567-e89b-12d3-a456-426614174001', 'Maria Oliveira', 'imagemUsuario2.png', 'maria.oliveira@gmail.com', '1985-05-23 00:00:00', 'senha456'); " +
            "INSERT INTO usuario (id, nome, icone, email, data_nascimento, senha) VALUES ('323e4567-e89b-12d3-a456-426614174002', 'Carlos Santos', 'imagemUsuario3.png', 'carlos.santos@gmail.com', '1992-08-30 00:00:00', 'senha789'); "
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM usuario WHERE id = '123e4567-e89b-12d3-a456-426614174000';" +
            "DELETE FROM usuario WHERE id = '223e4567-e89b-12d3-a456-426614174001';" +
            "DELETE FROM usuario WHERE id = '323e4567-e89b-12d3-a456-426614174002';"
        );
    }

}
