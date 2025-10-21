const { Pool } = require('pg');
const BD = new Pool(
    {
        user: 'postgres', //Usuário cadastrado no banco de dados
        host: 'localhost', //Endereço do servidor do BD
        database: '_2025_escola', //Nome do BD a ser conectado
        password: 'Admin', //Senha do usuário
        port: 5432 //Porta de conexão
    }
);
 module.exports = BD