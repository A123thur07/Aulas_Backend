//Função nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`); 
}
//Função anônima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`); 
}
//Arrow Function
const saudacaoArrow = (nome) => {
    console.log(`Tenha um bom dia ${nome}!`); 
}
saudacaoArrow ('João');

const somar = (v1,v2) => {
    console.log(v1+v2);
}
somar (2,2);

