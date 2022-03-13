const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')

const tasks = require('./routes/tasks')

const notFound = require('./middlewere/not-found')






//Middlewere
app.use(express.json())
// Serve front end as middlewere
app.use(express.static('./public'))



// Root Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)


    // app.get('/api/v1/tasks')          -  Get all tasks
    // app.get('/api/v1/tasks/:id')      -  Get a single tasks
    // app.post('/api/v1/tasks')         -  Create a new tasks
    // app.patch('/api/v1/tasks/:id')    -  Update Tasks
    // app.delete('/api/v1/tasks/:id')   -  Delete tasks







// Database Connection
const port = process.env.PORT || 5000
const connectionString = process.env.MONGO_URI


const start = async () => {
    try{
        await connectDB(connectionString)
        app.listen(port, console.log('Server is Running ' + port))

    } catch(err) {
        console.warn(err)
    }
}
start()

