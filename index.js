//importa o modulo http
const http = require("http");

const server = http.createServer((req, res) => {
res.end("Servidor Rodando");


//o req.url mostra a url que o usuário digitou no navegador, e o res.end envia uma mensagem final para o navegador, finalizando a requisição
res.end("Acessando: "+ req.url)
});

server.listen(3000, () => {
  console.log("Rodando em  http://localhost:3000");
});

//req informações da requisição, res informações da resposta
//res.end envia uma mensagem final para o navegador, finalizando a requisição
//server.listen faz o servidor escutar a porta 3000, e quando estiver rodando, exibe a mensagem no console
