const userService = require("../services/user.service");

class userController{
    async getAllUser(req, res){
        await res.json(userService.getAllUser());
    }
}

module.exports = new userController();