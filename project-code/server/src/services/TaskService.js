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
        Task.destroy({ where: { id: id } }); 

        return id; 
    }

    isExist(id) {
        return Task.findOne({ where: {id} });
    }
}


module.exports = TaskService