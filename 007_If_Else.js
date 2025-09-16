const idade = 16;

if (idade >= 18){
    console.log('Você é adulto');
} else if(idade < 18 && idade >= 12) {
    console.log('Você é um adolescente');
} else if(idade < 12 && idade >= 1) {
    console.log('Você é uma criança');
} else {
    console.log('Você é Bebê');   
}