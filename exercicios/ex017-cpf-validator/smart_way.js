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

    const parcialCpf = this.cpfClean.slice(0, -2);
    const digit1 = this.digitCreator(parcialCpf);

    return true; 
};

CpfValidator.prototype.digitCreator = function(parcialCpf) {
    const cpfArray = Array.from(parcialCpf);
    
    const regressive = cpfArray.length;
    console.log(regressive);
};

const cpf = new CpfValidator('705.484.450-52');
console.log(cpf.validator());