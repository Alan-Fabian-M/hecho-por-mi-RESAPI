require("dotenv").config();

const config = {
    APP_NAME: process.env.APP_NAME || 'API EMPLOYEES',
    APP_PROD: process.env.APP_PROD || 'false',
    APP_URL: process.env.APP_URL || 'http://localhost:3000',
    PORT: process.env.PORT || 3000,
    
    DB_CONNECTION : process.env.DB_CONNECTION || 'postgres',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DATABASE: process.env.DB_DATABASE || 'employees',
    DB_PASSWORD: process.env.DB_PASSWORD || 'alan159',
    DB_USERNAME : process.env.DB_USERNAME || 'postgres',
    DB_PORT : process.env.DB_PORT || '5432'

}

module.exports = config