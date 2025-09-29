const prompt= require('prompt-sync')();
console.log('-----------------------------------');
console.log('--Calcule--o--triângulo------------');
console.log('-----------------------------------');
function CalculeÁreaDoTriangulo(n1,n2) {
    let Área=(n1*n2)/2
    return Área; 
}
 let area=CalculeÁreaDoTriangulo(Number(prompt('Qual o tamanho do primeiro cateto? ')), Number(prompt('Qual o tamanho do segundo cateto? ')));
 console.log(area);
 