const express = require('express');
const rotas = express.Router();
const BD = require('../db')
//Listar turmas (r-rotas)
//localhost:3000/turmas/listar
rotas.get('/listar', async (req,res) =>{
    const dados = await BD.query('SELECT * FROM turmas order by nome_turma');
    console.log(dados.rows);
    res.render('turmas/lista.ejs', {dadosTurmas: dados.rows});
});
rotas.get('/novo', async (req,res) =>{
    res.render('turmas/novo')
});
rotas.post('/novo', async (req,res) =>{
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_professor= req.body.nome_professor;
    const telefone= req.body.telefone;
    const formacao= req.body.formacao;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    const sql= `INSERT INTO professores (nome_professor, telefone, formacao) 
    VALUES($1, $2, $3)`;
    await BD.query(sql, [nome_professor, telefone, formacao]);
    res.redirect('/professores/listar')
});
module.exports = rotas;