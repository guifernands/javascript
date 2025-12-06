function cpfCalc() {
    const cpf = '705.484.450-52';
    const cpfClean = cpf.replace(/\D+/g);
    let calculated = [];
    let calculated2 = [];
    let total1 = 0;
    let total2 = 0;

    for(let i = 0; i <= 9; i++) {
        let temp = parseInt(cpfClean[i]);
        let multiplier = 10 - i;
        calculated.push(temp * multiplier);
    }

    for (let i = 0; i <= 8; i++) {
        total1 += calculated[i];
    }

    let firstDigit = 11 - (total1 % 11);
    if (firstDigit > 9) {
        firstDigit = 0;
    }    
    for(let i = 0; i <= 9; i++) {
        let temp = parseInt(cpfClean[i]);
        let multiplier = 11 - i;
        calculated2.push(temp * multiplier);
    }
    for (let i = 0; i <= 9; i++) {
        total2 += calculated2[i];
    }

    let secondDigit = 11 - (total2 % 11);
    if (secondDigit > 9) {
        secondDigit = 0;
    }
    
    if (firstDigit === parseInt(cpfClean[9]) && secondDigit === parseInt(cpfClean[10])) {
        console.log(`The CPF: ${cpf} is valid.`)
    }
    else {
        console.log(`[ERROR] The CPF: ${cpf} is invalid.`)
    }
}

cpfCalc();