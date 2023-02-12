const {Sequelize} = require("sequelize");
const dbInfo = require("./local");

let sequelizeOptions = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
}
if(process.env.NODE_ENV === 'development') delete sequelizeOptions.logging;

const sequelize = new Sequelize(dbInfo.DBNAME, dbInfo.USER, dbInfo.PASSWORD, sequelizeOptions);

// CHECK CONNECTION (DURING DEVELOPMENT ONLY)
try {
    sequelize.authenticate().then(()=>{
        if(process.env.NODE_ENV === 'development')
            console.log("connection with database established");
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
require("./../api/models/Associations");
