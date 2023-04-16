const http = require('http');
const fs = require('fs');
const url = require('url');
//const bootstrap = require('bootstrap');
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

function requestResponder(req, res)
{
  const PATH = url.parse(req.url).pathname;
  //const HOST = url.parse(req.url).host;
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
  case '/reset.css':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    fs.createReadStream('./reset.css').pipe(res);
    break;
  case '/svg/favicon.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/favicon.svg').pipe(res);
    break;
  case '/svg/logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/logo.svg').pipe(res);
    break;
  case '/svg/facebook_logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/facebook_logo.svg').pipe(res);
    break;
  case '/svg/twitter_logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/twitter_logo.svg').pipe(res);
    break;
  case '/svg/instagram_logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/instagram_logo.svg').pipe(res);
    break;
  case '/svg/linkedin_logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/linkedin_logo.svg').pipe(res);
    break;
  case '/svg/youtube_logo.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/youtube_logo.svg').pipe(res);
    break;
  case '/svg/jauge.svg':
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    fs.createReadStream('./svg/jauge.svg').pipe(res);
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
