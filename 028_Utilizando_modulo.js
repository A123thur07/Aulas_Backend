//Importando o módulo criado, o nome pode ser qualquer um
const funcoesJuros = require('./_Modulo_Juros')

//Utilizando função juros_simples do módulo
const resultadoJurosSimples= funcoesJuros.juros_simples(1000, 5, 12);
console.log(resultadoJurosSimples);

//Utilizando a função juros_composto  do módulo
const resultadoJurosComposto= funcoesJuros.juros_composto(1000, 5, 12);

//Desestruturando o objeto de retorno da função
const {juros, capital} =resultadoJurosComposto;

console.log(`Juros foi R$${juros} e o total foi R$${total}`);