//Importando o módulo 'fs' para ler arquivos
const fs = require('fs');

//Lendo o arquivo Json
const dados= fs.readFileSync('./024_Json.json', 'utf8');

//Convertendo o Json para um objeto JavaScript utilizando JSON.parse
const pessoa = JSON.parse(dados)
console.log(pessoa);
console.log(pessoa.nome);

