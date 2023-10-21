const app = require("../server")
const UserService = require("../services/UserService")
const md5 = require("md5");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userService = new UserService()
const base_url = "/api/auth"

app.post(base_url + '/register', async (req, res) => {
    try {
        const userParams = req.body;
        const passwordHash = await md5(userParams.password)

        const user = await userService.isExist({
            username: userParams.username,
            passwordHash: passwordHash
        });

        if(user){
            res.status(400).json({ error : "This user already exist" }); 
        } 
        else {
            var newUserParams = {
                username : req.body.username,
                passwordHash : passwordHash
            };
        
            const newUser = await userService.register(newUserParams)

            let token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY);
            
            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        
            res.status(201).json(newUser);
        }
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error : error }); 
    }
})

app.post(base_url + '/login', async (req, res) => {
    try {
        const userParams = req.body;
        const passwordHash = await md5(userParams.password)

        const user = await userService.isExist({
            username: userParams.username,
            passwordHash: passwordHash
        });

        if(user){
            const password_valid = md5(req.body.password) === user.passwordHash;

            if(password_valid){
                let token = jwt.sign({ "id" : user.id, "username": user.username }, process.env.SECRET_KEY);

                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

                res.status(200).json({ user: user, token: token });
            } 
            else {
                res.status(400).json({ error : "Authentication failed" });
            }
        } 
        else {
            res.status(404).json({ error : "User does not exist" });
        }
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
})


app.delete(base_url + '/deleteAccount', async (req, res) => {
    const id = req.body.id;

    console.log(req.body);

    await userService.remove(id)

    res.status(200).json(id)
})