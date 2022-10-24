const userData = require("../db/context");

class userService{
    getAllUser(){
        return userData;
    }
}

module.exports = new userService();