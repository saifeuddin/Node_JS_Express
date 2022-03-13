

const getAllTasks = (req, res) => {
    console.log(req)
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send(`Get a single task -- ${req.params.id}`)
}

const updateTask = (req, res) => {
    console.log(req)
    res.send('Update old task')
}

const deleteTask = (req, res) => {
    console.log(req)
    res.send(' Delete a task')
}







module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}