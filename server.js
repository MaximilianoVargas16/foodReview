import express from 'express';
import dotenv from 'dotenv';

//node config
dotenv.config({path: '.config/config.env'});


const server = express();
server.listen(3000, console.log("servidor rodando na porta 3000..."))

server.get("/", (req, res) =>{
    res.send("pagina inicial")
});

server.get('/user', (req, res) =>{
res.send('pagina do Usuário')

})