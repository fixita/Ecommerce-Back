import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'catalog_si_db',
  user: 'root',
  password: '12345678',
  host: 'localhost',
  port: 3306,
});

export default sequelize;