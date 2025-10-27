const express = require('express');
const rotas = express.Router();
const BD = require('../db')
//Listar Professores (r-rotas)
//localhost:3000/professores/listar
rotas.get('/listar', async (req,res) =>{
    const dados = await BD.query('SELECT * FROM professores order by nome_professor');
    console.log(dados.rows);
    res.render('professores/lista', {dadosProfessores: dados.rows})
});

rotas.get('/novo', async (req,res) =>{
    res.render('professores/novo')
});
rotas.post('/novo', async (req,res) =>{
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_professor= req.body.nome_professor;
    const telefone= req.body.telefone;
    const formacao= req.body.formacao;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    //Inserindo dados recebidos no BD
    const sql= `INSERT INTO professores (nome_professor, telefone, formacao) 
    VALUES($1, $2, $3)`;
    await BD.query(sql, [nome_professor, telefone, formacao]);
    //Redirecionando para a página de listagem de professores
    res.redirect('/professores/listar')
});
//Criando rota para excluir os professor passando o id (D-delete)
rotas.post('/excluir/:id', async (req,res)=> {
    const id = req.params.id;
    const sql = 'UPDATE professores SET ativo = false WHERE id_professor = $1';
    await BD.query(sql,[id]);
    res.redirect('/professores/listar')
});
rotas.get('/editar/:id', async (req,res) => {
    //Recebendo o código que quero excluir
    const id = req.params.id;
    const sql = 'SELECT * FROM professores WHERE id_professor = $1'
    const dados = await BD.query(sql, [id]);
    console.log(dados.rows[0]);
    res.render('professores/editar.ejs',{professor: dados.rows[0]})
});
rotas.post('/editar/:id', async (req,res) =>{
    const id= req.params.id;
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_professor= req.body.nome_professor;
    const telefone= req.body.telefone;
    const formacao= req.body.formacao;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    //Inserindo dados recebidos no BD
    const sql= `UPDATE professores SET 
    nome_professor = $1,
    telefone = $2,
    formacao = $3
    WHERE id_professor = $4`;
    await BD.query(sql, [nome_professor, telefone, formacao, id]);
    //Redirecionando para a página de listagem de professores
    res.redirect('/professores/listar')
});
module.exports = rotas;