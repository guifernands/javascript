const products = [
    { id: 1, nome: 'baixo', categoria: 'instrument', preco: 500},
    { id: 2, nome: 'saxofone', category: 'instrument', preco: 900},
    { id: 3, nome: 'flauta', category: 'instrument', preco: 130},
    { id: 4, nome: 'amplificador', category: 'eletronics', preco: 500},
    { id: 5, nome: 'cabo de audio', category: 'eletronics', preco: 40},
    { id: 6, nome: 'camiseta metalica', category: 'roupas', preco: 100},
    { id: 7, nome: 'colete guns & roses', category: 'roupas', preco: 250}
];


const eletronics = products.filter(obj => obj.category === 'eletronics');

const discount10 = eletronics.map(obj => obj.price - (obj.price * 0.1));
console.log(discount10);