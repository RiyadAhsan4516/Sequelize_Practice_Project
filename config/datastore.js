const Sequelize = require("sequelize");
const dbinfo = require("./local");

let sequelizeOptions = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
}
if(process.env.NODE_ENV === 'development') delete sequelizeOptions.logging;

const sequelize = new Sequelize(dbinfo.DBNAME, dbinfo.USER, dbinfo.PASSWORD, sequelizeOptions)

// CHECK CONNECTION (DURING DEVELOPMENT ONLY)
try {
    sequelize.authenticate().then(()=>{
        if(process.env.NODE_ENV === 'development')
            console.log("connection with database established");
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// DEFINE MODELS USING THIS CONNECTION
const db = {
    User : require("../api/models/User")(sequelize),
    UserProfile: require("../api/models/UserProfile")(sequelize)
}

module.exports = db;
