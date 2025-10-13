const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if (numero === 2) {
        console.log('Pulei o número 2')
        continue; // faz voltar para o início do laço sem    perder a sequência
    }

    if (numero === 7) {
        console.log('Pulei o número 7')
        break;
    }

    console.log(numero);
}