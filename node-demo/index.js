const http = require('http'); 
const hostname = '0.0.0.0'; 
const port = 3000; 
const server = http.createServer((req, res) => { 
res.statusCode = 200; 
res.setHeader('Content-Type', 'text/plain'); 
res.end('Halo dari WSL Node.js di Browser!\n'); 
}); 
server.listen(port, hostname, () => { 
console.log(`Server running at http://localhost:${port}/`); 
}); console.log('Halo dari WSL Node.js');
