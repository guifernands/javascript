// Math.random() gera [0, 1), multiplica por 100 → [0, 100) e o + 1 desloca para [1, 101), então o floor dá 1..50

const num_aleatorio = Math.floor(Math.random() * 100) + 1;

if (typeof num_aleatorio !== 'number') { 
    return numero;
} else {
    if (num_aleatorio % 3 === 0 && num_aleatorio % 5 === 0) {
        console.log("FizzBuzz", num_aleatorio);
    } else if (num_aleatorio % 3 === 0) {
        console.log("Fizz" , num_aleatorio);
    } else if (num_aleatorio % 5 === 0) {
        console.log("Buzz", num_aleatorio);
    } else {
        console.log(num_aleatorio);
    }
}

