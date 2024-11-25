import express from 'express';
import config from './config/env.js';
import apiRoutes from './framework/routes/routes.js';
import cors from 'cors';
import morgan from 'morgan'
import { sequelize } from './config/db/index.js';

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
