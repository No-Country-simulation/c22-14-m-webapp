import { Sequelize } from 'sequelize';

import { config } from '../env.js';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.db_host,
    username: config.db_user,
    password: config.db_password,
    database: config.db_name,
    logging: false,
});

export { sequelize };
