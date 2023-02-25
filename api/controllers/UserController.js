const User = require("../models/Associations").User;

module.exports = {
    GetAllUsers : async function(req, res, next){
        const user = await User.findAll({include: "user_profile"});
        res.status(200).json({
            status: "Success",
            data: user
        })
    },

    CreateUsers: async function(req, res, next){
        try{
            const user = await User.create({...req.body}); // this is just a comment
            res.status(200).json({
                status: "successful",
                data: user
            })
        }catch(err){
            res.status(500).json({
                status: 'failed',
                data: err
            })
        }
    }
}
