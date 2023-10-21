const { Task } = require("../models/task")

class TaskService {
    get(userId) {
        return Task.findAll({where: {userId: userId}});
    }
    create(input) {
        return Task.create(input)
    }

    update({existingTask, newParams}) {
        return existingTask.update(newParams)
    }

    delete(id) { 
        return Task.destroy({ where: { id: id } });
    }

    isExist(id) {
        return Task.findOne({ where: {id} });
    }
}


module.exports = TaskService