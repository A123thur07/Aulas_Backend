//Criando constante para receber o módulo express
const express = require('express');
//Criando um aplicação express
const app = express();

//Rota principal
app.get('/', (req, res) => {
    res.send('Bem-Vindo a compra de Produtos!')
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Essa é a página Sobre do projeto!</h1>')
});

const produtos = ['Nootebook', 'Mouse', 'Teclado'];
app.get('/produtos', (req, res) => {
    let html = '<h1> Lista de produtos </h1>';
    html += '<ul>'
    for (let Produto of produtos) {
        html+=`<li>${Produto}</li>`   
    }
    html += '</ul>'
    res.send(html)
})

app.get('/produto/:id', (req,res) => {
    const id= req.params.id;
    const produtoSel= produtos[id];
    if (produtoSel == undefined) {
        res.send('Produto não encontrado')
    } else {
       res.send(`Voce esta visualizando o produto do id ${id} - é um ${produtoSel}`)
    }
})

app.get('/Total/:id_produto/:preco/:qtde', (req, res) => {
    const id_produto= req.params.id_produto;
    const Selecao = produtos[id_produto]
    const preco = Number(req.params.preco);
    const qtde = parseFloat(req.params.qtde);
    const resultado = preco*qtde;
    res.send(`O produto ${Selecao}, de preço ${preco}, tendo a quantidade de ${qtde} selecionados, possui o resultado de compra R$${resultado}`)
})

app.get('/menu', (req,res) => {
    let html =`
    <h1>Menu</h1>
    <a href="/">Principal</a> <br>
    <a href="/sobre">Sobre</a> <br>
    <a href="/produtos">Produtos</a> <br>
    <a href="/produto/1">Produto 1</a> <br>
    <a href="/produto/7">Produto invalido</a> <br>
    <a href="/Total/:id_produto/:preco/:qtde">Compra</a> <br>
    `;
    res.send(html)
})
const porta = 3001;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})