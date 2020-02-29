// Dados de conexão com o banco de dados
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'administrator',
    password: 'egaeB3hu',
    database: 'agenda-petshop'
})

module.exports = conexao;