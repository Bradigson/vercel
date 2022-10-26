const userService = require("../services/user.service");

class userController{
    async getAllUser(req, res){
        await res.json(userService.getAllUser());
    }

    async getAllUserById(req, res){
        await res.json(userService.getAllUserById(req.params.id))
    }


    async createUser(req, res){
        await res.json(userService.createUser(req.body))
    }

  
}

module.exports = new userController();