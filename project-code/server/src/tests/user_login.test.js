const md5 = require("md5");
const {default: axios} = require("axios")

const api = axios.create({
    baseURL: "http://localhost:5000/api/",
});

test('user login', async () => {
    const userCredentials = {
        username: "Bobby",
        password: "qwerty123"
    };

    const passwordHash = md5(userCredentials.password)
    
    const {user} = (await api.post("auth/login", userCredentials)).data;

    expect(user.username).toBe(userCredentials.username);
    expect(user.passwordHash).toBe(passwordHash);
});