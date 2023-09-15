const { User } = require("../models/user")
const md5 = require("md5");

class UserService {
    register(input) {
        const newUser = User.create({...input})

        return newUser
    }

    remove(id) {
        User.destroy({ where: { id: id } }); 

        return id; 
    }

    isExist(user) {
        console.log(user.password)
        return User.findOne({ where: {
            username: user.username,
            passwordHash: md5(user.password)
        } });
    }
}


module.exports = UserService