const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

/*
    Instancias:
        -express
        -server
        -socket.io
*/
const app =express();
const server = http.createServer(app);
const io = socketIO(server);

/* Define a localização da pasta estática */

app.use(express.static(path.join(__dirname, 'public')))

/* Define o EJS como a engine de renderização frontend */

app.set('views', path.join(__dirname, 'public'))
app.engine('html', ejs.renderFile);

/*
    Rota raiz '/' para acessar o index.html da aplicação
*/

app.use('/', (req, res)=> {
    res.render('index.html')
})

/*
    Inicio do código chat 
*/

let messages = [];

/* Cria a conexão com socket.io */
io.on('connection', socket=> {
    console.log('Conexão estabelecida com o IdUsuario:' + socket.id)
});

/*
    Fim do código chat 
*/

/* Criação do servidor http */

server.listen(3000, ()=> {
    console.log('Servidor do web chat rodando em -> http://localhost:3000')
})

