// variável especial 'arguments' que sustenta todas argumentos/parâmetros enviados
/* function funcaoA(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
} 
funcaoA(1, 2, 3, 4, 5, 6);*/

/* function funcaoB(a, b, c, d, e, f) {
    console.log(a,b,c,d,e,f);
}
funcaoB(1, 2, 3);  */

/* function funcaoC(a, b) {
    console.log(a + b);
}
funcaoC(2); */

/* function funcaoD(a, b) {
    b = b || 2;
    console.log(a + b);
}
funcaoD(2); */

/* function funcaoE({ valor1, valor2, valor3}) {
    console.log(valor1, valor2, valor3);
}
funcaoE(['Guilherme Fernandes', 'Rodrigues', 20]); */

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1 , 20, 30, 40, 50);