function somar (a, b) {
    return a + b;
}

function subtrair (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        return null;
    }
    return a / b;
}

const resultado = somar(5, 3);
console.log(`O resultado da soma é: ${resultado}`);