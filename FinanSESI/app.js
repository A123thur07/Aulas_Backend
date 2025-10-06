const express = require('express');
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')

const app = express();

// Configurando o motor de visualização EJS
app.set('view engine', 'ejs');
// Configurando a pasta para os arquivos estáticos
app.use(express.static('public'));
//Definindo o layout padrão
app.use(expressLayouts);
app.set('layout', 'layouts/principal');

//Para processar e receber os dados do formulário
    app.use(express.urlencoded({extend:true}))

//Rota principal
app.get('/', (req,res) => {
    // Buscando o arquivo index.ejs na pasta views
    res.render('index');
});

app.get('/sobre', (req,res) => {
    // Buscando o arquivo sobre.ejs na pasta views
    res.render('sobre');
});
app.get('/juros_Simples', (req,res) => {
    // Buscando o arquivo Juros_Simples.ejs na pasta views
    res.render('Juros_Simples');
});
app.post('/juros_simples', (req,res) => {
    //recebendo os dados dos campos do formulário
    const capital = Number(req.body.capital);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo);
    const juros =(capital*taxa*tempo)/100;
    const total = juros+capital

    res.render('juros_simples', {capital, taxa, tempo, juros, total})
})
app.get('/juros_compostos', (req,res) => {
    // Buscando o arquivo Juros_Compostos.ejs na pasta views
    res.render('juros_Compostos');
});
app.post('/juros_compostos', (req,res) => {
    //recebendo os dados dos campos do formulário
    const capital = Number(req.body.capital);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo);
    const total =capital*((1+(taxa/100))**tempo);
    const juros = total - capital;
    

    res.render('juros_compostos', {capital, taxa, tempo, juros, total})
})


const porta= 3000
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
})



