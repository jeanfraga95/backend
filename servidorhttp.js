const http = require('http');
const server = http.createServer((req, res) => {
    //dados do header (statuscode e tipo de informação que será enviada para o navegador)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/') {
        //resposta final para o navegador, finalizando a requisição
        res.end('Bem-vindo à página principal!');
    } else if (req.url === '/sobre') {
        res.end('Esta é a página sobre.');
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada.');
    }
});
//porta de escuta do servidor, e quando estiver rodando, exibe a mensagem no console
server.listen(3000,() => {
    console.log("Servidor rodando em http://localhost:3000");
});