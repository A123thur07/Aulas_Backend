const express = require('express');
const rotas = express.Router();
const BD = require('../db')
//Listar turmas (r-rotas)
//localhost:3000/turmas/listar
rotas.get('/listar', async (req,res) =>{
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_disciplina';
    const dados = await BD.query(`SELECT * FROM disciplinas INNER JOIN professores on disciplinas.id_professor = professores.id_professor 
        WHERE disciplinas.ativo = true and (nome_disciplina ILIKE $1 or nome_professor ILIKE $1) 
	    ORDER BY ${ordem}`,[`%${busca}%`]);
    console.log(dados.rows);
    res.render('disciplinas/lista', {dadosDisciplinas: dados.rows});
});
rotas.get('/novo', async (req,res) =>{
    //buscando os dadois dos prodfessores para alimentar o select
    const dadosProfessores = await BD.query(`
        SELECT id_professor,nome_professor FROM professores 
        WHERE ativo = true 
        ORDER BY nome_professor `);

    res.render('disciplinas/novo', {dadosProfessores: dadosProfessores.rows});
});
rotas.post('/novo', async (req,res) =>{
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_disciplina= req.body.nome_disciplina;
    const id_professor = req.body.id_professor;
    // OU const{ nome_turma} = req.body;
    const sql= `INSERT INTO disciplinas (nome_disciplina,id_professor)
    VALUES($1,$2)`;
    await BD.query(sql, [nome_disciplina, id_professor]);
    res.redirect('/disciplinas/listar')
});
//Criando rota para excluir os professor passando o id (D-delete)
rotas.post('/excluir/:id', async (req,res)=> {
    const id = req.params.id;
    //a melhor prática e desativar o item
    const sql = 'UPDATE disciplinas SET ativo = false WHERE id_disciplina = $1';
    await BD.query(sql,[id]);
    res.redirect('/disciplinas/listar')
})
rotas.get('/editar/:id', async (req,res) => {
    //Recebendo o código que quero excluir

    const id = req.params.id;
    const sql = 'SELECT * FROM disciplinas WHERE id_disciplina = $1'
    const dados = await BD.query(sql, [id]);
    const dadosProfessores = await BD.query(`
        SELECT id_professor,nome_professor FROM professores 
        WHERE ativo = true 
        ORDER BY nome_professor `);
    console.log(dados.rows[0]);
    res.render('disciplinas/editar.ejs',{disciplina: dados.rows[0], dadosProfessores: dadosProfessores.rows})
});
rotas.post('/editar/:id', async (req,res) =>{
    const id= req.params.id;
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome_disciplina= req.body.nome_disciplina;
    const id_professor= req.body.id_professor;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    //Inserindo dados recebidos no BD
    const sql= `UPDATE disciplinas SET 
    nome_disciplina = $1,
    id_professor = $2
    WHERE id_disciplina = $3`;
    await BD.query(sql, [nome_disciplina, id_professor, id]);
    //Redirecionando para a página de listagem de professores
    res.redirect('/disciplinas/listar')
});
module.exports = rotas;