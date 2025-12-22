const configuracoes = {
    _nivel: 1, // variável "escondida" com "_" na frente

    get nivel() { // retorna o nivel quando pedido
        return this._nivel;
    },

    set nivel(novoValor) { // permite sobrescrever o nivel com condiçoes
        if (novoValor < 1 || novoValor > 99) {
            console.log('Nível inválida.')
            return;
        }
        this._nivel = novoValor;
        console.log(`Novo nível: ${this._nivel}`);
    }
};

configuracoes.nivel = 40;
console.log(configuracoes.nivel);