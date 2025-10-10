const carrinho = [
    { nome: "Mouse", preco: 80, qtd: 1 },
    { nome: "Teclado", preco: 150, qtd: 2},
    { nome: "Headset", preco: 220, qtd: 1}
]

// exercicio: calcular o total do carrinho usando desestruturação no loop for

let total = 0;
for (let i = 0; i < carrinho.length; i++) {
    const { preco, qtd } = carrinho[i];
    total = preco * qtd;
    console.log(total);
}
