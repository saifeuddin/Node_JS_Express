const express = require('express')
const server = express()


server.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

server.all('*', (req, res) => {
    res.status(404).send('Not Found')
})

server.listen(5000, ()=> {
    console.log('Server is running')
})
