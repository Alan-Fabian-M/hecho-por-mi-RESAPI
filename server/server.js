const express = require('express');
const cors = require('cors');

const config = require('./config');
const db = require('../db/connection');
 
class Server{
    
    constructor(){
        // se instancia la app con express 
        this.app = express();
        // se saca el puerto en el que estara conectada
        this.port = config.PORT;

        // aqui se añade las path {url} de cada elemento
        this.paths = {
        } 

        //conectar a la base de datos
        this.dbConnection();

        // Middlewares
        this.Middlewares();

        // rutas de la aplicacion 
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
        } catch (error) {
            console.log("DataBase offline -" + error);
        }
    }

    Middlewares(){
        // CORS
        this.app.use(cors());

        //lectura y paseo del body
        this.app.use(express.json());

        //directorio publico 
        this.app.use(express.static('public'));

    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports = Server;