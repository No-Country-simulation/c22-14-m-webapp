import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import ("./src/config/db/models/models-associations.js");
import { apiRoutes } from './src/framework/routes/routes.js';
import { config } from './src/config/env.js';
import { sequelize } from './src/config/db/index.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(config.port , () => {
            console.log(`Servidor escuchando en http://localhost:${process.env.PORT || 3000}`);
        });

    }).catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
});
