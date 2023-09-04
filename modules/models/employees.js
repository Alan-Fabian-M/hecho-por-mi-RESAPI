const {DataTypes,Model}  = require('sequelize');
const db = require('../../db/connection.js');

class employees extends Model {

    //Otras propiedades del modelo 

}

employees.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize:db,
        modelName: "employees",
        tableName: "Employees"
    }
    
);

module.exports = employees;