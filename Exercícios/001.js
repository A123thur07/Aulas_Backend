const prompt= require('prompt-sync')();
console.log('-----------------------------------');
console.log('------Seu--nome--completo----------');
console.log('-----------------------------------');
function NomeCompleto(Pnome,Snome) {
    console.log(Pnome+' '+Snome);
    
}
for (let x = 0; x < 3; x++) {
    NomeCompleto(prompt('Qual o seu primeiro nome? '),prompt('Qual o seu segundo nome? ')) 
}
