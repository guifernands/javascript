function criaJogador(nome) {
    const identificador = {id: 1, nome: nome};
    Object.defineProperties(identificador, 'id', {
        writable: false,
        configurable: false
    });
}
criaJogador('Alberto');