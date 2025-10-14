
const Convercoes = require('./022.js')

const resultadoConver_Fahrennheit= Convercoes.Celsius_para_Fahrenheint(12);
const {Celsius} = resultadoConver_Fahrennheit;
console.log(`${Celsius} ºC corresponde a ${resultadoConver_Fahrennheit} ºF`);

const resultadoConver_milhas= Convercoes.Quilometros_para_milhas(20);
const {Quilometros} = resultadoConver_milhas;
console.log(`${Quilometros} Km corresponde a ${resultadoConver_milhas} mi`);
