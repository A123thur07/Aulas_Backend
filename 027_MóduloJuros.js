const juros_simples=(capital,taxa,tempo) =>{
    const juros =capital * (taxa/100) * tempo;
    const objRetorno= {
        juros: juros,
        total: capital+juros,
    }
    return objRetorno;
}
const juros_composto=(capital,taxa,tempo) =>{
    const montante =capital * ((1+taxa/100) ** tempo);
    const objRetorno= {
        juros: montante-capital,
        total: montante,
    }
    return objRetorno;
}

module.exports = { juros_simples, juros_composto }