function cpfCalc() {
    const cpf = '60161764002';
    let calculated = [];
    let total = 0;

    for(let i = 0; i <= 9; i++) {
        let temp = parseInt(cpf[i]);
        let multiplier = 10 - i;
        calculated.push(temp * multiplier);
    }
    console.log(calculated);

    for (let i = 0; i <= 9; i++) {
        total += calculated[i];
    }
}


cpfCalc();
