let produto = {
    nome: "Celular",
    preco: 2000,
    marca: "Sansung",
    quebrado: false
}

//exibindo todos os dados do objeto
console.log(produto);
console.log(produto.nome); // Celular
console.log(produto.marca); //Sansung
console.log(produto.modelo); //undefined

console.log(produto['nome']); //Celular

produto.preco= 1900;
console.log(produto);
produto.modelo = 'Galaxy S10';
console.log(produto.quebrado);

//Iterando sobre as chaves do objeto utilizando o for
for (let chave in produto) {
    console.log(`O valor de ${chave} é ${produto[chave]}`); 
}

let aluno = {
    nome: 'Joaquim',
    sexo: 'M',
    idade: 16,
    dados_mae:{
        nome:'Maria',
        telefone:'99 0000-0000'
    },
    boletim: [
        {materia: "Português", nota: 10, faltas: 6},
        {materia: "Matemática", nota: 8, faltas: 3}
    ]
}

console.log(aluno);
console.log(aluno, dados_mae.telefone);
console.log(aluno.boletim[1].nota);
