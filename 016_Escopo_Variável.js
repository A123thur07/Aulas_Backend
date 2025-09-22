let VariávelGlobal= "Sou global";

function MinhaFunção() {
    let variavelLocal= "Sou local"
    console.log(VariávelGlobal); //Acessa a variável global
    console.log(variavelLocal); //Acessa a variável local
}

MinhaFunção();
console.log(VariávelGlobal); //Acessa a variavel global
console.log(variavelLocal); //Erro! variavelLocal não é identificada


