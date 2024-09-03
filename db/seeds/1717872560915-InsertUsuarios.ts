import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertUsuarios1717872560915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO usuario (id, nome, email, data_nascimento, senha, acesso) VALUES ('123e4567-e89b-12d3-a456-426614174000', 'Administrador', 'tribofit@gmail.com', '1990-01-15 00:00:00', '$2a$10$N5/CuSEYwUJR4XotdI2rYeLRMXBK39/VgTCHp.fkYWGndm04yjSpu', 'admin'); " +
            "INSERT INTO usuario (id, nome, email, data_nascimento, senha, acesso) VALUES ('223e4567-e89b-12d3-a456-426614174001', 'Maria Oliveira', 'maria.oliveira@gmail.com', '1985-05-23 00:00:00', '$2a$10$N5/CuSEYwUJR4XotdI2rYeLRMXBK39/VgTCHp.fkYWGndm04yjSpu', 'user'); " +
            "INSERT INTO usuario (id, nome, email, data_nascimento, senha, acesso) VALUES ('323e4567-e89b-12d3-a456-426614174002', 'Carlos Santos', 'carlos.santos@gmail.com', '1992-08-30 00:00:00', '$2a$10$N5/CuSEYwUJR4XotdI2rYeLRMXBK39/VgTCHp.fkYWGndm04yjSpu', 'user'); " + 
            "INSERT INTO usuario (id, nome, email, data_nascimento, senha, acesso) VALUES ('e5914854-47b8-439b-92e9-0fb1fef196e5', 'Lucas Medina', 'lucas@gmail.com', '1992-08-30 00:00:00', '$2a$10$N5/CuSEYwUJR4XotdI2rYeLRMXBK39/VgTCHp.fkYWGndm04yjSpu', 'user'); "
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM usuario WHERE id = '123e4567-e89b-12d3-a456-426614174000';" +
            "DELETE FROM usuario WHERE id = '223e4567-e89b-12d3-a456-426614174001';" +
            "DELETE FROM usuario WHERE id = '323e4567-e89b-12d3-a456-426614174002';" +
            "DELETE FROM usuario WHERE id = 'e5914854-47b8-439b-92e9-0fb1fef196e5';" 
        );
    }

}
