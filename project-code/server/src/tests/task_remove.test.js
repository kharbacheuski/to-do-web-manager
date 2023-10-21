const api = require("./api")

test('task remove', async () => {
    const taskInfo = {
        userId: 1,
        title: "test task",
        description: "test task",
        createdAt: new Date(),
        isImportant: false
    };

    const task = (await api.post("task", {...taskInfo})).data;

    const deletedUserId = (await api.delete("task", {data: {id: task.id}})).data;

    expect(deletedUserId).toBe(task.id);
});