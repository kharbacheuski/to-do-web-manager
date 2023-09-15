const app = require("../server")
const TaskService = require("../services/TaskService");
require('dotenv').config();

const taskService = new TaskService()

app.get('/api/task/', async (req, res) => {
    try {
        const allTasks = await taskService.get()
        
        res.status(200).json(allTasks);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
})

app.post('/api/task/', async (req, res) => {
    try {
        const newTask = await taskService.create(req.body)
        
        res.status(200).json(newTask);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
})

app.delete('/api/task', async (req, res) => {
    try {
        const id = req.body.id;

        if(await taskService.isExist(id)) {
            await taskService.delete(id)

            res.status(200).json({answer: `Task ${id} was deleted`})
        }
        else res.status(404).json({error: `Task ${id} not found`})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
})

app.put('/api/task/', async (req, res) => {
    try {
        const newParams = req.body;

        const existingTask = await taskService.isExist(newParams.id);

        if(existingTask){
            const task = await taskService.update({existingTask, newParams})

            res.status(404).json(task)
        } 
        else {
            res.status(404).json({error: `Task ${id} not found`})
        }
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error : error }); 
    }
})