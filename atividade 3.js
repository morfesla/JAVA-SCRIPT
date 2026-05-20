function verificarNumero(valor) {
    if (valor > 0) {
        return "Positivo";
    } else if (valor < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}

console.log("O número 10 é:", verificarNumero(10));
console.log("O número -5 é:", verificarNumero(-5));
console.log("O número 0 é:", verificarNumero(0));