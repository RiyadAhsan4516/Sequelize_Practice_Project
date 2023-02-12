const Sequelize = require("sequelize");
module.exports = (sequelize)=>{
    return sequelize.define('user',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate:{
                isEmail: {msg: 'Invalid email provided'}
            }
        },
        password:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            validate:{
                len:{
                    args: [8,100],
                    msg: "The minimum length of password must be 8 and maximum is 100"
                },
                notEmpty:{
                    msg: 'the password field is empty'
                }
            },
            set(value){
                this.setDataValue('password', value.trim())
            }
        },
    },{
        createdAt: false,
        updatedAt: false,
        defaultScope:{
            attributes: {exclude:['password']}
        },
        tableName: 'user'
    })
}
