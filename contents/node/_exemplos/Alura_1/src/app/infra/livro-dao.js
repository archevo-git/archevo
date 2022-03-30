class LivroDao{

    constructor(db){ //o construtor recebe o parametro db
        this._db = db;
    }

    //SEM PROMISE
    //método chamado pelo rotas.js, passando uma função callback 
    //que é recebida pelo parametro de mesmo nome
    lista0(callback){ 
        this._db.all( //método all() recebe o SELECT e a CALLBACK FUNCTION

            'SELECT * FROM livros',
            
            function(erro, resultados){
                //chamo o método callback recebido como parametro em listaLivros 
                //e passo os parametros erro e resultados recebidos da FUNCTION
                //para fazer a tratativa do resultado
                callback(erro, resultados); //listaLivros.callback(erro, resultados)

                /* OU, COM ARROW FUNCTION
                (erro, resultados) =>
                    callback(erro, resultados)
                */
            }
        )
    }

    //COM PROMISE
    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultado) => {
                    //se der erro, REJECT
                    if (erro) return reject ('Não foi possível listar os livros!');
                    //senão, RESOLVE
                    return resolve(resultado);
                }
            )

        })
    }
}

//Exporto o tipo da classe que a gente criou para ser usado por outros módulos
module.exports = LivroDao;
