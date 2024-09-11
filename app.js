var http = require('http');
const fs = require('fs');
const _ = require('lodash');

var server = http.createServer((req, res) => {
    console.log(req.url,req.method)

    res.setHeader('Content-Type', 'text/html');

    let path = './views';

    switch(req.url){
        case '/about':
            path += '/about.html';
            break;
        case '/':
            path += '/index.html';
            break;
        default:
            path += '/404.html';
            break;  
    }


    fs.readFile(path, (err, data) => {
        if (err) {
        console.log(err);
        res.end()   
        }else{
            
            res.write(data);
            res.end();
        }
    })
})

server.listen(3000,'127.0.0.1', () => {
    console.log('Server is running on port 3000');
});