const server = require('http');

const servidor = server.createServer((req,res) => {

    console.log(req.method);

    res.writeHead(200, {'Content-Type': 'text/plain'})

    res.end(`Método recebido: ${req.method}`);
});
servidor.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");
})

