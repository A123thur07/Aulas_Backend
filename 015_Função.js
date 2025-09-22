const prompt= require('prompt-sync')();
function BemVindo() {
    console.log('🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇');
    console.log('Bem-Vindo à Unidade Curricular Backend');
    console.log('🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇');
}


function Multiplicação(nr1,nr2){
    console.log(`O resultado é ${nr1*nr2}`);
}
Multiplicação(Number(prompt('Qual o primeiro número que quer multiplicar? ')),Number(prompt('Qual o outro número que quer multiplicar? ')) );