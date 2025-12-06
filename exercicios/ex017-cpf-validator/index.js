function cpfCalc() {
    const cpf = '70548445052';
    let calculated = [];
    let calculated2 = [];
    let total1 = 0;
    let total2 = 0;

    for(let i = 0; i <= 9; i++) {
        let temp = parseInt(cpf[i]);
        let multiplier = 10 - i;
        calculated.push(temp * multiplier);
    }
    console.log(calculated);

    for (let i = 0; i <= 8; i++) {
        total1 += calculated[i];
    }

    let firstDigit = 11 - (total1 % 11);
    if (firstDigit > 9) {
        firstDigit = 0;
    }    
    for(let i = 0; i <= 9; i++) {
        let temp = parseInt(cpf[i]);
        let multiplier = 11 - i;
        calculated2.push(temp * multiplier);
    }
    for (let i = 0; i <= 9; i++) {
        total2 += calculated2[i];
    }
    console.log(calculated2);


}


cpfCalc();
