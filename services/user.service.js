const userData = require("../db/context");

class userService{
    getAllUser(){
        return userData;
    }

    GetIndex(id){
        return userData.findIndex((data)=>{return data.id.toString() === id.toString()})
    }

    getAllUserById(id){
        let index = this.GetIndex(id);
        return userData[index];
    }
}

module.exports = new userService();