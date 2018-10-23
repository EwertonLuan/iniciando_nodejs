var http = require('http');

function handleRequest(request, response){
    response.writeHead(200, {
        'Content-Type':'text/plain'
    })
    
    var soma = 2 + 2
    
    return response.end('The value of soma is ==>'.concat(soma))
}

var server = http.createServer(handleRequest);

server.on('connection', function(client){
    console.log('there is a new connection'.concat(client.remoteAddress))
})

server.listen(3000, '127.0.0.1')


