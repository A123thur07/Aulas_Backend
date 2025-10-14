const Celsius_para_Fahrenheint=(Celsius) =>{
    const conversor = Celsius * 1.8 + 32;
    return conversor;
} 

const Quilometros_para_milhas=(Quilometros) =>{
    const Conversor = Quilometros * 0.621371; 
    return Conversor
}

module.exports = { Celsius_para_Fahrenheint, Quilometros_para_milhas }