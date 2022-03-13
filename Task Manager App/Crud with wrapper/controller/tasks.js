const Task = require('../models/Task')
const asyncWrapper = require('../middlewere/asyncWrapper')

// const {
//     createCustomError
// } = require('../error/customError')



//  Get All Tasks from Database
const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json({ tasks })
})



//  Post a new task on Database
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})




//  Get a single Task from Database
const getTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID } = req.params
    const task = await Task.findOne({_id: taskID})

    if (!task) {
        return res.status(404).json({msg: `No task with ${taskID}`})
    }

    res.status(200).json({ task })
})




//  Update a specific tasks
const updateTask = asyncWrapper(async (req, res) => {
    try {
        const {id: taskID } = req.params
        const task = await Task.findOneAndUpdate({_id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            // return res.status(404).json({msg: `No task with ${taskID}`})

            // Custom Error
            return res.next(createCustomError(`No task with ${taskID}`, 404))
        }

        res.status(200).json({task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})




//  Edit a specific tasks
const editTask = asyncWrapper(async (req, res) => {
    try {
        const {id: taskID } = req.params
        const task = await Task.findOneAndUpdate({_id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            // return res.status(404).json({msg: `No task with ${taskID}`})


            // Custom Error
            return res.next(createCustomError(`No task with ${taskID}`, 404))
        }

        res.status(200).json({task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})




//  Delete a specific tasks
const deleteTask = asyncWrapper(async (req, res) => {
    try {
        const {id: taskID } = req.params
        const task = await Task.findOneAndDelete({_id: taskID})

        if (!task) {
            // return res.status(404).json({msg: `No task with id ${taskID}`})


            // Custom Error
            return res.next(createCustomError(`No task with ${taskID}`, 404))
        }

        // res.status(200).json({task})
        res.status(200).json({task: null, status: 'success'})
        // res.status(200).send()
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})







module.exports={
    getAllTasks, getTask, createTask, updateTask, deleteTask, editTask,
}