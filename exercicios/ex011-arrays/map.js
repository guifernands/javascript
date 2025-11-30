const products = [
    { id: 1, name: 'bass', categoria: 'instrument', price: 500},
    { id: 2, name: 'saxofone', category: 'instrument', price: 900},
    { id: 3, name: 'flute', category: 'instrument', price: 130},
    { id: 4, name: 'amplifier', category: 'eletronics', price: 400},
    { id: 5, name: 'audio cables', category: 'eletronics', price: 40},
    { id: 6, name: 'shirt metalica', category: 'clothes', price: 100},
    { id: 7, name: 'vest guns & roses', category: 'clothes', price: 250}
];

// return only eletronics
const eletronics = products.filter(obj => obj.category === 'eletronics');

// make the discount in the eletronics
const discount10 = eletronics.map(obj => obj.price * 0.9);

// return the total with the discount
const total = discount10.reduce(function(acc, obj) {
    return acc + obj; 
}, 0); // 0 to define the acumulator
console.log(total);