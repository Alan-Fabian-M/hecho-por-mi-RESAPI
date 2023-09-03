const {DataTypes,Model}  = require('sequelize');
const db = require('../db/connection.js');
const employees = require('./employees.js')

class job extends Model {

    //Otras propiedades del modelo 

    //definicion de las asociaciones 
    static associate(){
        job.belongsTo(employees, {foreignKey:"id_employees"});
    }


}

job.init(
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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_employees: {
            type: DataTypes.INTEGER,
            references:{
                model:employees,
                key: 'id'
            }
        }
    },
    {
        sequelize:db,
        modelName: "job",
        tableName: "job"
    }
    
);

module.exports = employees;