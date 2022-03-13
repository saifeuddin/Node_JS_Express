const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()







//Middlewere
app.use(express.json())



//Routes
app.get('/', (req, res) => {
    res.send('task manager app - ' + req.params)
})


app.use('/api/v1/tasks', tasks)

    // app.get('/api/v1/tasks')          -  Get all tasks
    // app.get('/api/v1/tasks/:id')      -  Get a single tasks
    // app.post('/api/v1/tasks')         -  Create a new tasks
    // app.patch('/api/v1/tasks/:id')    -  Update Tasks
    // app.delete('/api/v1/tasks/:id')   -  Delete tasks








const port = 5000
const connectionString = process.env.MONGO_URI


const start = async ()=> {
    try{
        await connectDB(connectionString)
        app.listen(port, console.log('Server is Running'))

    } catch(err) {
        console.log(err)
    }
}
start()
