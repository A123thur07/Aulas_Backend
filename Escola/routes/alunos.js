const express = require('express');
const rotas = express.Router();
const BD = require('../db')
//Listar turmas (r-rotas)
//localhost:3000/turmas/listar
rotas.get('/listar', async (req,res) =>{
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome';
    const dados = await BD.query(`SELECT * FROM alunos left JOIN turmas on alunos.id_turma = turmas.id_turma 
        WHERE alunos.ativo = true and (nome ILIKE $1 or nome_turma ILIKE $1)
        ORDER BY ${ordem}`,
    [`%${busca}%`]);
    console.log(dados.rows);
    res.render('alunos/lista', {dadosAlunos: dados.rows});
});
rotas.get('/novo', async (req,res) =>{
    const dadosTurmas = await BD.query(`
        SELECT id_turma,nome_turma FROM turmas 
        WHERE ativo = true 
        ORDER BY nome_turma `);

    res.render('alunos/novo', {dadosTurmas: dadosTurmas.rows});
});
rotas.post('/novo', async (req,res) =>{
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome= req.body.nome;
    const idade= req.body.idade;
    const sexo= req.body.sexo;
    const turma= req.body.id_turma;
    const foto= req.body.foto
    

    // OU const{ nome_turma} = req.body;
    const sql= `INSERT INTO alunos (nome, idade, sexo, foto, id_turma) 
    VALUES($1,$2,$3,$4,$5)`;
    await BD.query(sql, [nome,idade,sexo,foto,turma]);
    res.redirect('/alunos/listar');
});
//Criando rota para excluir os professor passando o id (D-delete)
rotas.post('/excluir/:id', async (req,res)=> {
    const id = req.params.id;
    //a melhor prática e desativar o item
    const sql = 'UPDATE alunos SET ativo = false WHERE id_aluno = $1';
    await BD.query(sql,[id]);
    res.redirect('/alunos/listar')
})
rotas.get('/editar/:id', async (req,res) => {
    //Recebendo o código que quero excluir
    const id = req.params.id;
    const sql = 'SELECT * FROM alunos WHERE id_aluno = $1'
    const dados = await BD.query(sql, [id]);
    const dadosTurmas = await BD.query(`
        SELECT id_turma,nome_turma FROM turmas 
        WHERE ativo = true 
        ORDER BY nome_turma `);
    console.log(dados.rows[0]);
    res.render('alunos/editar.ejs',{aluno: dados.rows[0], dadosTurmas: dadosTurmas.rows})
});

rotas.post('/editar/:id', async (req,res) =>{
    const id= req.params.id;
    //Obtendo os dados do formulário e cadastro e guardando uma variável
    const nome= req.body.nome;
    const idade= req.body.idade;
    const sexo= req.body.sexo;
    const foto= req.body.foto;
    const id_turma= req.body.id_turma;
    // OU const{ nome_professor, telefone, formacao} = req.body;
    //Inserindo dados recebidos no BD
    const sql= `UPDATE alunos SET 
    nome = $1,
    idade = $2,
    sexo = $3,
    foto = $4,
    id_turma = $5
    WHERE id_aluno = $6`;
    await BD.query(sql, [nome, idade, sexo, foto, id_turma, id]);
    //Redirecionando para a página de listagem de professores
    res.redirect('/alunos/listar')
});
module.exports = rotas;