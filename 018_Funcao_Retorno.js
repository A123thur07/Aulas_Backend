const prompt= require('prompt-sync')();
function calcularComissão(VdeVendas,PdaComissão){
    let Tcomissão= PdaComissão/100
    let Vdacomissão= Tcomissão*VdeVendas
    return Vdacomissãon 
}

calcularComissão(Number(prompt('Qual o valor que vendeu?')),Number(prompt('Qual o valor da porcentagem de vendas?')));