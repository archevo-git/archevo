//importo o tipo  LivroDao (referencia a classe LivroDAO), vindo do livro-dao.js
const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

//exporto as rotas
module.exports = (app) =>{
    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
        );
    });

//-----------------------------
//Trago as informações para mostrar na tela, exemplo SEM BD
  /*   app.get('/livros', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Listagem de livros </h1>
                    </body> 
                </html>
            `
        );
    }); */
    
    /* //Exemplo sem o BD
    app.get('/livros', function(req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );
    }); */

/* 
    //EXEMPLO SEM USAR O PADRAO DAO
    //Trago as informações para mostrar na tela, exemplo COM BD
    //Importo o método get() para atender requisições do tipo GET do HTTP
    //Ele recebe a URL da rota de onde vem os dados e uma função de callback que tem os parâmetros req e resp
    app.get('/livros', function(req, resp) {

        //db.all para fazer uma listagem: 
            //parâmetro 1: SELECT; parâmetro 2: callback function dizendo o que deve ser feito quando a consulta terminar
        //Essa função de callback, por sua vez, possui 2 parâmetros: erro e resultado
        //Se o SELECT der certo, o retorno será armazenado em resultado, senão armazena o erro no parâmetro erro
        db.all('SELECT * FROM livros', function(erro, resultados) {

            //Exibo os arquivos .marko para o cliente na resposta (resp). 
            //Para isso, chamo o nosso template para a listagem de livros (1º parametro)
            //e passo para ele os dados vindos do BD (2º parametro)
             resp.marko(
                require('../views/livros/lista/lista.marko'), //template
                {
                    livros: resultados //dados
                }
            );
        });
    }); */

    //* /EXEMPLO COM O PADRAO DAO
    app.get('/livros', function(req, resp){

        //SEM PROMISE
        //crio uma instancia da classe LivroDao para usar o método "lista"
        //e passo nosso db (instancia do BD) que é o que o contrutor() está esperando
/*         const livroDao = new LivroDao(db);
        livroDao.lista(function(erro, resultados){
            resp.makro( //1º parametro=TEMPLATE; 2º parametro=DADOS
                require('../views/livros/lista/lista.marko/lista.marko'), //arq .marco, não .marko.js
                {
                    livros:resultados
                }
            )
        }) */

        //COM PROMISE
        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => resp.marko( //1º parametro=TEMPLATE; 2º parametro=DADOS
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/livros/form/form.marko'));
    })

    //RELEMBRANDO:
    //uso o método HTTP POST
    //indico qual URL ele vai atender ('/livros/form')
    //defino a função de callback para todas as vezes que o usuário fazer essa requisição
        //que recebe os parâmetros 'require' e 'response'
    app.post('/livros/form', function(req, resp){
        const livroDao = new LivroDao(db);
        //Chamo um método adiciona(), que receberá req.body, 
            //em que estão armazenados os dados dos nossos livros
        livroDao.adciona(req.body)
            //esse método nos devolverá uma Promise, nos permitindo executar o método then()
            .then()
            .catch(erro => console.log(erro));
    })
}

    