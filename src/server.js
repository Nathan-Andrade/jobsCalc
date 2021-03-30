const express = require("express")
const server = express()
const routes = require('./routes')

server.use(express.static('public'))

server.use(routes);

//Servidor na Porta 3333
server.listen(3333, () => console.log('Servidor rodando bem d++ :)'))
