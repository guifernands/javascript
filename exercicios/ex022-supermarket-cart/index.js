const shopping = [
    { item: 'Keyboard', price: 150, amount: 2 },
    { item: 'Mouse', price: 50, amount: 1 },
    { item: 'Monitor', price: 1000, amount: 1 }
];

function Cart(itens) {
    this.itens = itens;
}

Cart.prototype.totalCalc = function() {
    return this.itens.reduce((acc, item) => {
        return acc + (item.price * item.amount);
    }, 0);
};

const myCart = new Cart(shopping);
console.log("Total: R$" + myCart.totalCalc());