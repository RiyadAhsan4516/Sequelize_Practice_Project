const Sequelize = require("sequelize");
module.exports = (sequelize)=>{
    const User = sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return User
}
