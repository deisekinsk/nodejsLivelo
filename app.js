import { createServer } from 'http';
import * as fs from 'fs';


const port = 3000;
const hostname = '127.0.0.1';


const server = createServer((_req, res) => {
  //res.statusCode = 200;
  const path = _req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()
  switch(path){
    case '': 
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Start Here Now');
        break
    case '/about':
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('About you')
        break
    default:
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('404 Not Found')
  } 
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`+ `\n Press Ctrl-C to exit.`);
});