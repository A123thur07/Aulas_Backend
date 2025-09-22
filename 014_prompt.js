const prompt= require('prompt-sync')();
const anoAtual = new Date().getFullYear();

let nome= prompt('Qual é o seu nome? ');
console.log(`Seja bem vindo(a) ${nome}`);
let AnoDeNasc= Number(prompt('Que ano nasceu? '));
let niver= prompt('Já fez aniversário? (S para sim/ N para não) ')
niver = (niver=='S') ? console.log(`Você tem ${anoAtual-AnoDeNasc} anos!`) : console.log(`Você tem ${(anoAtual-AnoDeNasc)-1} anos!`) 

