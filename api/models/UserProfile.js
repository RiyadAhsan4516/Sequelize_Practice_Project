const {DataTypes} = require("sequelize");
const dt = DataTypes;

module.exports = (sequelize)=>{
    const UserProfile = sequelize.define('user_profile', {
        id:{
            type: dt.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dt.STRING(100),
            allowNull: false
        },
        address:{
            type: dt.STRING(100),
            allowNull: true
        },
        user_id:{
            type: dt.INTEGER
        },
        role_id:{
            type: dt.INTEGER
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return UserProfile
}
