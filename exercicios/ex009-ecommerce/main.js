function criarCarrinho(nomeCliente) {
    return {
        // PROPRIEDADES
        nome: nomeCliente,
        itens: [],
        total: 0,
        
        // MÉTODOS
        adicionarItem(produto, valor) {
            const produtoAdicionado = {produto, valor};
            this.itens.push(produtoAdicionado);
            this.total += valor;
            console.log(`Adicionado: ${produto} (R$${valor}).`);
        },

        verResumo() {
            console.log(`Sr(a) ${this.nome}, você tem ${this.itens.length} itens. \nTotal: R$${this.total}`)
        },

        finalizarCompra() {
            if (this.itens.length === 0) {
                console.log('O carrinho está vazio.');
            }
            else {
                console.log(`Compra de R$${this.total}, finalizada com sucesso!`);
                this.itens = [];
                this.total = 0;
            }
        }
    };
}

// A variável 'meuCarrinho' agora guarda o objeto que a função retornou.
const meuCarrinho = criarCarrinho("Guilherme"); 

// 2. Agora usamos os métodos DESSE objeto específico
console.log("--- Começando as Compras ---");
meuCarrinho.adicionarItem("Resident Evil 2 Remake", 120);
meuCarrinho.adicionarItem("Little Nightmares", 45);

console.log("\n--- Resumo ---");
meuCarrinho.verResumo();

console.log("\n--- Finalizando ---");
meuCarrinho.finalizarCompra();

// Depois de finalizar a compra o carrinho esvazia
meuCarrinho.finalizarCompra();

