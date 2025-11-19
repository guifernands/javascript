function criaConta(nomeDoTitular, valorInicial) {
    return {
        titular: nomeDoTitular,
        saldo: valorInicial,

        depositar(valor) {
            if (valor <= 0) {
                console.log('[ERRO] Valor inválido para depósito.');
            }
            else {
                this.saldo += valor; // this.saldo = this.saldo + valor
                console.log(`Deposito do valor R$${valor} efetuado. Seu saldo atual: R$${this.saldo}.`);
            }
        },

        sacar(valor) {
            if (this.saldo > 0 && this.saldo >= valor) {
                this.saldo -= valor; // this.saldo = this.saldo - valor;
                console.log(`Saque do valor R$${valor} efetuado. Seu saldo atual: R$${this.saldo}.`);
            }
            else {
                console.log(`[ERRO] Saldo insuficiente para sacar o valor R$${valor}.`);
            }
        },

        verSaldo() {
            console.log(`Saldo de ${this.titular}: R$${this.saldo}.`);
        }
    };
}

const minhaConta = criaConta('Dev Iniciante', 50)

minhaConta.verSaldo();
minhaConta.depositar(100);
minhaConta.sacar(200);
minhaConta.sacar(20);