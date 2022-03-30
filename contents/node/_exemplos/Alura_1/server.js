/* //-->ANTES do EXPRESS
const http = require('http');
const servidor  = http.createServer(function (req, resp) {
    let html = '';
    if (req.url == '/') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>`;
    } else if (req.url == '/livros') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>`;
    resp.end(html)
}}); */

const app = require('./src/config/custom-express');

app.listen(3000, function(){ //recebe a porta e o callback (chamada de volta)
    console.log('Servidor Node rodando na porta 3000!')
})

