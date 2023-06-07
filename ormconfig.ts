import { RoleEntity } from "./src/routes/user/entities/role.entity";

require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [RoleEntity],
  migrations: ['src/migrations/*.js'],
  seeds: ['src/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
