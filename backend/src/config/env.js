import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    jwt_secret: process.env.SECRET_KEY,
    jwt_expiration_time: process.env.JWT_EXPIRATION_TIME,
};

export { config };