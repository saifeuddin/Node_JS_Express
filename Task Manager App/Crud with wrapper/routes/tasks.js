const express = require('express')
const router = express.Router()

// Middleweres
const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    editTask,
} = require('../controller/tasks')



// Routes
router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .put(editTask)
    .delete(deleteTask)



module.exports = router