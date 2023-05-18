import { MigrationInterface, QueryRunner } from "typeorm";

export class Hieu1684417478246 implements MigrationInterface {
    name = 'Hieu1684417478246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`hashedRt\` \`hashedRt\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`hashedRt\` \`hashedRt\` varchar(255) NOT NULL`);
    }

}
