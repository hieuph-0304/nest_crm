import { MigrationInterface, QueryRunner } from "typeorm";

export class Hieutest1683724947057 implements MigrationInterface {
    name = 'Hieutest1683724947057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contact_info\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`employeeId\` varchar(36) NULL, UNIQUE INDEX \`REL_f188a018423a2cc75535509ff9\` (\`employeeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`employeeId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`meeting\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`zoomUrl\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`managerId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee_meetings_meeting\` (\`employeeId\` varchar(36) NOT NULL, \`meetingId\` varchar(36) NOT NULL, INDEX \`IDX_0f0c3a58474a40670f633832aa\` (\`employeeId\`), INDEX \`IDX_10f26ded70438524748ef34cd1\` (\`meetingId\`), PRIMARY KEY (\`employeeId\`, \`meetingId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` ADD CONSTRAINT \`FK_f188a018423a2cc75535509ff97\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_07278e1532a8daa462123fb7bc1\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4a920dfa304e096fad40e8c4a0\` FOREIGN KEY (\`managerId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_meetings_meeting\` ADD CONSTRAINT \`FK_0f0c3a58474a40670f633832aa8\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employee_meetings_meeting\` ADD CONSTRAINT \`FK_10f26ded70438524748ef34cd10\` FOREIGN KEY (\`meetingId\`) REFERENCES \`meeting\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_meetings_meeting\` DROP FOREIGN KEY \`FK_10f26ded70438524748ef34cd10\``);
        await queryRunner.query(`ALTER TABLE \`employee_meetings_meeting\` DROP FOREIGN KEY \`FK_0f0c3a58474a40670f633832aa8\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4a920dfa304e096fad40e8c4a0\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_07278e1532a8daa462123fb7bc1\``);
        await queryRunner.query(`ALTER TABLE \`contact_info\` DROP FOREIGN KEY \`FK_f188a018423a2cc75535509ff97\``);
        await queryRunner.query(`DROP INDEX \`IDX_10f26ded70438524748ef34cd1\` ON \`employee_meetings_meeting\``);
        await queryRunner.query(`DROP INDEX \`IDX_0f0c3a58474a40670f633832aa\` ON \`employee_meetings_meeting\``);
        await queryRunner.query(`DROP TABLE \`employee_meetings_meeting\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP TABLE \`meeting\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP INDEX \`REL_f188a018423a2cc75535509ff9\` ON \`contact_info\``);
        await queryRunner.query(`DROP TABLE \`contact_info\``);
    }

}
