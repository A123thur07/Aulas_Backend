const express = require('express');
const rotas = express.Router();
const BD = require('../db')
//Listar turmas (r-rotas)
//localhost:3000/turmas/listar
rotas.get('/listar', async (req,res) =>{
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_turma';
    const dados = await BD.query(`SELECT * FROM turmas
        WHERE turmas.ativo = true and nome_turma ILIKE $1 order by ${ordem}`,
    [`%${busca}%`] );
    console.log(dados.rows);
    res.render('turmas/lista', {dadosTurmas: dados.rows});
});
rotas.get('/novo', async (req,res) =>{
    res.render('turmas/novo')
});
rotas.post('/novo', async (req,res) =>{
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_turma= req.body.nome_turma;
    // OU const{ nome_turma} = req.body;
    const sql= `INSERT INTO turmas (nome_turma) 
    VALUES($1)`;
    await BD.query(sql, [nome_turma]);
    res.redirect('/turmas/listar')
});
//Criando rota para excluir os professor passando o id (D-delete)
rotas.post('/excluir/:id', async (req,res)=> {
    const id = req.params.id;
    //a melhor prática e desativar o item
    const sql = 'UPDATE turmas SET ativo = false WHERE id_turma = $1';
    await BD.query(sql,[id]);
    res.redirect('/turmas/listar')
})
rotas.get('/editar/:id', async (req,res) => {
    //Recebendo o código que quero excluir
    const id = req.params.id;
    const sql = 'SELECT * FROM turmas WHERE id_turma = $1'
    const dados = await BD.query(sql, [id]);
    console.log(dados.rows[0]);
    res.render('turmas/editar.ejs',{turma: dados.rows[0]})
});
rotas.post('/editar/:id', async (req,res) =>{
    const id= req.params.id;
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_turma= req.body.nome_turma;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    //Inserindo dados recebidos no BD
    const sql= `UPDATE turmas SET 
    nome_turma = $1
    WHERE id_turma = $2`;
    await BD.query(sql, [nome_turma, id]);
    //Redirecionando para a página de listagem de professores
    res.redirect('/turmas/listar')
});
module.exports = rotas;