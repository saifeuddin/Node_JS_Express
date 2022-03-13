const http = require("http")

const server = http.createServer( (req, res)=> {
    console.log(req.url)
    res.write('ddddshello')
    res.end()
})

server.listen(5000, ()=> {
    console.log(' Server is listyening on port 5000')
})
