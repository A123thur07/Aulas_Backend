const ValordePI=()=> {
    return 3.14159
}
const ÁreaCircunferencia=(raio)=> {
    let π= ValordePI();
    let Area= π*(2*raio);
    console.log(`A área da círculo do raio ${raio} é ${Area}`);
}
ÁreaCircunferencia(4);