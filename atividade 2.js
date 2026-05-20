// 1. Criamos a função que calcula o valor de C
function calcularC(A, B) {
    let C;

    // A lógica continua exatamente a mesma aqui dentro
    if (A === B) {
        C = A + B;
    } else {
        C = A * B;
    }

    // O "return" faz a função devolver o resultado de C para quem a chamou
    return C;
}

// 2. Agora nós chamamos (executamos) a função passando os valores

// Teste 1: Valores iguais (deve somar: 4 + 4 = 8)
let resultado1 = calcularC(4, 4);
console.log("Teste 1 (Iguais):", resultado1);

// Teste 2: Valores diferentes (deve multiplicar: 4 * 3 = 12)
let resultado2 = calcularC(4, 3);
console.log("Teste 2 (Diferentes):", resultado2);