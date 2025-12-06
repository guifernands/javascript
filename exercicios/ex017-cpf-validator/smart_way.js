function CpfValidator(cpfSent) {
    Object.defineProperty(this, 'cpfClean', {
        enumerable: true,
        get: function() {
            return cpfSent.replace(/\D+/g, '');
        }
    });
}

CpfValidator.prototype.validator = function() {
    if(typeof this.cpfClean === 'undefined') return false;
    if(this.cpfClean.length !== 11) return false;
    if(this.isSequence()) return false;

    const parcialCpf = this.cpfClean.slice(0, -2);
    const digit1 = this.digitCreator(parcialCpf);
    const digit2 = this.digitCreator(parcialCpf + digit1);
    
    const newCpf = parcialCpf + digit1 + digit2;
    return newCpf === this.cpfClean;
};

CpfValidator.prototype.digitCreator = function(parcialCpf) {
    const cpfArray = Array.from(parcialCpf);

    let regressive = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        console.log(regressive, val, regressive * val);
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

CpfValidator.prototype.isSequence = function() {
    const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
    return sequence === this.cpfClean;
};

const cpf = new CpfValidator('070.987.720-03');

if (cpf.validator()) {
    console.log('Valid CPF.')
}
else {
    console.log('Invalid CPF.')
}