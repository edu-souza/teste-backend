import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidades1717872378207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO cidade (id, nome, estado) VALUES ('ae0a90df-3b84-4c72-90fa-e60f1ec69932','Criciúma', 'SC'); " +
            "INSERT INTO cidade (id, nome, estado) VALUES ('ebdf0e31-73c9-4686-ab55-9db0b00a6fba','Araranguá', 'SC'); " +
            "INSERT INTO cidade (id, nome, estado) VALUES ('3de66ed5-5f92-4cd8-9dd6-2cf0e898e21d','Siderópolis', 'SC'); "
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM cidade WHERE id = 'ae0a90df-3b84-4c72-90fa-e60f1ec69932';" +
            "DELETE FROM cidade WHERE id = 'ebdf0e31-73c9-4686-ab55-9db0b00a6fba';" +
            "DELETE FROM cidade WHERE id = '3de66ed5-5f92-4cd8-9dd6-2cf0e898e21d';"
        )
    }

}
