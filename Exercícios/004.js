console.log('-----------------------------------');
console.log('---Valor--da--Àrea--do--triangulo--');
console.log('-----------------------------------');
function ValordePI() {
    return 3.14159
}
function ÁreaCircunferencia(raio) {
    let π= ValordePI();
    let Area= π*(2*raio);
    console.log(`A área da círculo do raio ${raio} é ${Area}`);
}
 ÁreaCircunferencia(3);