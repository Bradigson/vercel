const userService = require("../services/user.service");

class userController{
    async getAllUser(req, res){
        await res.json(userService.getAllUser());
    }

    async getAllUserById(req, res){
        await res.json(userService.getAllUserById(req.params.id))
    }
}

module.exports = new userController();