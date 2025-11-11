const express = require('express');
const ejs = require('ejs')
const path = require('path')
const app = express();

app.set('views', path.join(__dirname, 'views'));// Configurando a pasta das views
app.set('view engine', 'ejs');// Configurando o motor de visualização EJS
app.use(express.static(path.join(__dirname,'public')));// Configurando a pasta para os arquivos estáticos
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //Para utilizar dados em formato JSON

//Rota da página principal "Landing Page"
app.get('/',(req,res)=>{
    res.render('landing/index');
})
//Importando as rotas do Admin
const AdminRotas = require('./routes/admin')
app.use('/admin/', AdminRotas);

//Importando as rotas Professores
const professoresRotas = require('./routes/professores')
app.use('/professores', professoresRotas);

//Importando as rotas Turmas
const turmasRotas = require('./routes/turmas')
app.use('/turmas', turmasRotas);

//Importando as rotas Disciplinas
const disciplinasRotas = require('./routes/disciplinas')
app.use('/disciplinas', disciplinasRotas);

//Importando as rotas Alunos
const alunosRotas = require('./routes/alunos')
app.use('/alunos', alunosRotas);


const porta=3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
})