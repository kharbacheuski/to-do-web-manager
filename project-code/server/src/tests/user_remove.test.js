const api = require("./api")

test('user remove', async () => {
    const userCredentials = {
        username: "testUser",
        password: "testUser"
    };

    const user = (await api.post("auth/register", userCredentials)).data;
    const deletedUserId = (await api.delete("auth/deleteAccount", {data: {id: user.id}})).data;

    expect(deletedUserId).toBe(user.id);
});