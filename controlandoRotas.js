const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Bem-vindo à página principal!');
    } else if (req.url === '/sobre') {
        res.end('Esta é a página sobre.');
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada.');
    }
});
server.listen(3000);