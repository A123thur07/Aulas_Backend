let funcionario = {
    nome: "Reinaldo",
    salario: 5000.00,
    idade: 40,
    setor: "RH"
}
//Atribuindo à variáveis os valores das propriedades do objeto
let salario = funcionario.salario * 1.1;
let nome = funcionario.nome
// Aqui o objeto é desestruturado
// Declarando e atribuindo os valores automaticamente
let { idade, setor } = funcionario;
console.log(salario);
console.log(nome);
//Podemos criar varios objetos em um arquivo Json(JavaScript Object Notation) sem uma declaração de variável
// o arquivo Json só permite a criação de chaves com aspas(")

