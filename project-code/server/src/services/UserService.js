const { User } = require("../models/user")

class UserService {
    register(input) {
        const newUser = User.create({...input})

        return newUser
    }

    remove(id) {
        return User.destroy({ where: { id: id } });; 
    }

    isExist(user) {
        return User.findOne({ where: {
            username: user.username,
            passwordHash: user.passwordHash
        } });
    }
}


module.exports = UserService