const prompt= require('prompt-sync')();
const NomeCompleto = (Pnome,Snome) => {
    console.log(Pnome+' '+Snome); 
}
for (let x = 0; x < 3; x++) {
    NomeCompleto(prompt('Qual o seu primeiro nome? '),prompt('Qual o seu segundo nome? ')); 
}