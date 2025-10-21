const express = require('express');
const rotas = express.Router();
// Rota para painel administrativo
rotas.get('/', (req,res) =>{
    res.render('admin/dashboard')
});

module.exports = rotas;