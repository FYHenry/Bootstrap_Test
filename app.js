const http = require('http');
const fs = require('fs');
const url = require('url');
const bootstrap = require('bootstrap');
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

//const indexHtml = fs.open('./index.http', (err, fd) => {});
//const indexCss = fs.open('./index.css', (err, fd) => {});

function requestResponder(req, res)
{
  const PATH = url.parse(req.url).pathname;
  switch (PATH)
  {
  case '/':
  case '/index.html':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    fs.createReadStream('./index.html').pipe(res);
    break;
  case '/index.css':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    fs.createReadStream('./index.css').pipe(res);
    break;
  default:
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Pas de fichier ici.\n:-/\n');
  }
}

const httpServer = http.createServer();
httpServer.on('request', requestResponder);

function httpServerOutput()
{
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
}

httpServer.listen(PORT, HOSTNAME, httpServerOutput);
