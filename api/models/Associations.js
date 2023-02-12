const sequelize = require("../../config/datastore");

// DEFINE MODELS USING THIS CONNECTION
const db = {
    User : require("./User")(sequelize),
    UserProfile: require("./UserProfile")(sequelize),
    Role: require("./Role")(sequelize)
}

// USER 1:1 USERPROFILE
db.User.hasOne(db.UserProfile, {foreignKey: 'user_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
db.UserProfile.belongsTo(db.User,{foreignKey: 'user_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});

// ROLE 1:M USERPROFILE
db.Role.hasMany(db.UserProfile, {foreignKey:'role_id', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
db.UserProfile.belongsTo(db.Role, {foreignKey:'role_id', onDelete:'RESTRICT', onUpdate: 'RESTRICT'});

// safe migration =>
sequelize.sync();

module.exports = db
