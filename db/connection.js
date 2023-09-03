const {Sequelize} = require('sequelize');

const config = require('../server/config');

const user = encodeURIComponent(config.DB_USERNAME);
const password = encodeURIComponent(config.DB_PASSWORD);
const host = encodeURIComponent(config.DB_HOST);
const port = config.PORT;
const DataBase = config.DB_DATABASE;
const typeDatabBase = config.DB_CONNECTION;

const url = `${typeDatabBase}://${user}:${password}@${host}:${port}/${DataBase}`;

console.log(url)

const option = {
    dialect: config.DB_CONNECTION, 
    loggin : false
}

const sequilizeConnection = new Sequelize(url , option);

module.exports = sequilizeConnection;
