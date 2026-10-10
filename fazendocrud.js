const http = require('http');
const port = 3000;

let livros=[
    {id:1, titulo:"O Senhor dos Anéis", autor:"J.R.R. Tolkien"},
    {id:2, titulo:"1984", autor:"George Orwell"},
    {id:3, titulo:"O Pequeno Príncipe", autor:"Antoine de Saint-Exupéry"}];

    //servidor http

    const server = http.createServer((req,res) => {

        const metodo = req.method;//metodo http da requisição (GET, POST, PUT, DELETE)
        const url = req.url;//armazena a url da requisição (ex: /livros, /livros/1)
        res.setHeader('Content-Type', 'application/json');

        //metodo Get (lista os lisvros)

        //se a url conter '/livros' e o metodo da requisi~]ao for GET
        if(url === '/livros' && metodo === 'GET'){
            res.statusCode = 200;

            //faz o retorno da lista de livros em formato JSON
            res.end(JSON.stringify(livros));
            return;
        }
        //metodo post (adiciona um livro na lista de livros)
        //se a url requirida conster "/livros"e o metodo da requisição for POST
        if(url === '/livros' && metodo === 'POST'){
            let body = ''; //veriavel para armazenar os dados do body(requisição
            //evento disparado quando chegam os "pedaços" da requisição
            //"data" = dados do corpo da requisição
            //parte = variavel que representa cada uma das pates do body
            req.on('data', parte => {
                body += parte; //aqui fazemos a o concatenamento das partes do body, para formar o corpo completo da requisição
            });
            //evento disparado quando todas as partes foram acumuladas
            //'end' = já recebi todas as partes do body, pode processar.
            req.on('end', () => {
                //convertemps p json recebido em objeto javscript
                const novoLivro = JSON.parse(body);
                //adiciona o novolivro no array 'livros' usando o .push
                livros.push(novoLivro);
                res.statusCode = 201; //status 201 = criado com sucesso.
                //retornamos a mensagem formatada para json com o objeto criado
                res.end(JSON.stringify({
                    mensagem: 'Livro adicionado com sucesso!',
                    livro: novoLivro
                }));
            });
            return;
        }
            
            


    });
    server.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });