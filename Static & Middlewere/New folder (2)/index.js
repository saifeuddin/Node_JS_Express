const express = require('express')
const path = require('path')

const server = express()



// This is an middlewere
server.use(express.static('./style'))


// server.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })



server.all('*', (req, res) => {
    res.status(404).send('Not Found')
})

server.listen(5000, ()=> {
    console.log('Server is running')
})
