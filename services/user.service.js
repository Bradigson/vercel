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



    createUser(data){
        userData.push(data);
        return ({message  : "User created"});
    }


}

module.exports = new userService();