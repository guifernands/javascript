class validadorCPF {
    constructor(cpfEnviado) {
        // o this referese ao objeto que está sendo criado
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function() {
                return cpfEnviado.replace(/\D+/g, '')
            }
        });
    }

    // esse validator é igual o que ta comentado lá embaixo, MAS esse em específico dentro da classe bota direto no prototype
    validador() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;

        const parcialCpf = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criadorDigito(parcialCpf);
        const digito2 = this.criadorDigito(parcialCpf + digito1);

        const novoCpf = parcialCpf + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criadorDigito(parcialCpf) {
        const cpfArray = Array.from(parcialCpf);
        let regressivo = cpfArray.length + 1;
        
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    sequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

// testando com cpf válido
const cpf = new validadorCPF('070.987.720-03');

if (cpf.validador()) {
    console.log('CPF válido.');
} else {
    console.log('CPF inválido.');
}

// jeito "bruto" de fazer
/* validadorCPF.prototype.validador = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.sequencia()) return false;

    const parcialCpf = this.cpfLimpo.slice(0, -2); // tira os ultimos 2 digitos
    const digito1 = this.criadorDigito(parcialCpf);
    const digito2 = this.criadorDigito(parcialCpf + digito1);

    const novoCpf = parcialCpf + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

validadorCPF.prototype.criadorDigito = function(parcialCpf) {
    const cpfArray = Array.from(parcialCpf);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        console.log(regressivo, val, regressivo * val);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

validadorCPF.prototype.sequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new validadorCPF('070.987.720-03');

if (cpf.validador()) {
    console.log('CPF válido.');
}
else {
    console.log('CPF inválido.');
} */