const prompt= require('prompt-sync')();
function SejaBemVindo(clientnome) {
    console.log(`Seja Bem-Vindo(a) ${clientnome}!`);
}
for (let i = 0; i < 3; i++) {
    SejaBemVindo(prompt('Qual o seu nome? '))   
}
