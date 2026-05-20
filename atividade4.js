
const numeros = [12, 7, 23, 4, 8, 15];

let pares = 0;
let impares = 0;


for (let num of numeros) {
    if (num % 2 === 0) {
        pares++; 
    } else {
        impares++; 
    }
}


console.log(`Vetor analisado: [${numeros.join(', ')}]`);
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);