const Sequelize = require("sequelize");
module.exports = (sequelize)=>{
    const Role = sequelize.define('role',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return Role
}
