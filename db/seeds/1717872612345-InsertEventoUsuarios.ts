import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertEventoUsuarios1717872612345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO evento_usuarios (id, "statusParticipante", "eventoId", "usuarioId") VALUES 
            ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'A', 'e86ab35b-38f7-441f-8919-07c3f640ec3d', '123e4567-e89b-12d3-a456-426614174000'),
            ('e1299bd9-5726-446b-a154-230bc8366e24', 'A', '5ecbae43-e74c-4628-a437-fad673c849d9', '123e4567-e89b-12d3-a456-426614174000'),
            ('971d0958-4ee1-4ca3-a5bb-8ebe78699967', 'A', '3f4e0ebf-3bd0-4bd7-8719-8396e7925563', '123e4567-e89b-12d3-a456-426614174000')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM evento_usuarios WHERE id IN (
                'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 
                'e1299bd9-5726-446b-a154-230bc8366e24', 
                '971d0958-4ee1-4ca3-a5bb-8ebe78699967'
            );`
        );
    }

}
