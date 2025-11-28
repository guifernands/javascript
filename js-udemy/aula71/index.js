// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,   // valor
        writable: true,  // controla se o valor pode ou não ser alterado
        configurable: true // controla se eu posso apagar, reconfigurar, mexer nos valores e etc
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}