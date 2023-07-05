const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:800');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  proxy.web(req, res, { target: 'http://localhost:5000' }, (err) => {
    console.error(err);
    res.statusCode = 500;
    res.end('Proxy error');
  });
});

server.listen(8000, () => {
  console.log('Proxy server is running on http://localhost:8000');
});