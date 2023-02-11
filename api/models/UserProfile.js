const Sequelize = require("sequelize");
module.exports = (sequelize)=>{
    const UserProfile = sequelize.define('user_profile', {
        id:{
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        },
        address:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: true
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return UserProfile
}
