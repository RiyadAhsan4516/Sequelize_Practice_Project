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

// DEFINE MODELS USING THIS CONNECTION
const db = {
    User : require("../api/models/User")(sequelize),
    UserProfile: require("../api/models/UserProfile")(sequelize),
    Role: require("../api/models/Role")(sequelize)
}

// DEFINE ASSOCIATIONS
db.User.hasOne(db.UserProfile, {foreignKey: 'user_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
db.UserProfile.belongsTo(db.User,{foreignKey: 'user_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
db.Role.hasMany(db.UserProfile, {foreignKey:'role_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
db.UserProfile.belongsTo(db.Role, {foreignKey:'role_id', onDelete:'RESTRICT', onUpdate: 'RESTRICT'});

// sequelize.sync();

module.exports = db;
