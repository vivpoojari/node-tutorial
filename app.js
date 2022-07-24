const { log } = require('console')
const http = require('http')

//Creating http server - http.createServer() method takes in a callback function which has 2 parameters
//request and response are 2 OBJECTS. client request is in the object req and its response is res
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/contact'){
        res.end('Welcome to our contacts page')
    }
    else res.end(`<h1>Oops page doesnt exist</h1>`)   //default
})

server.listen(5000)     //Specify port that server listens on
//we see that node app.js doesnt execute and end. This is cause we created a web server. Web server 
//keeps listening for requests until server terminates - you want your server to always be up