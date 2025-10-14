const fs = require('fs');

const pessoa={
    nome:'Arthur',
    Idade:16,
    hobbies:['estudar', 'tocar violoncelo', 'ler livros']
};

//Covertendo um objeto JavaScript para JSON
const json= JSON.stringify(pessoa);

//Gravando o arquivo JSON
fs.writeFileSync('./026.json', json);