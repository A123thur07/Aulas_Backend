//Função nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`); 
}
saudacao("João");

//Função anonima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`); 
}
saudacaoAnonima('Maria');


function soma(v1,v2) {
    console.log(v1+v2);
}

const somar= function (v1,v2) {
    console.log(v1+v2);
}
soma(1,1)