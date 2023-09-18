const { User } = require("../models/user")

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
        return User.findOne({ where: {
            username: user.username,
            passwordHash: user.passwordHash
        } });
    }
}


module.exports = UserService