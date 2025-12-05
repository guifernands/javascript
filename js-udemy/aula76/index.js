// Product Creator
// Product = Name, Price
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Price changes
Product.prototype.increase = function(increaser) {
    this.price += increaser;
}
Product.prototype.decrease = function(decreaser) {
    this.price -= decreaser;
}

// Product = a Shirt
// Shirt = Name, Price, Color and Size
function Shirt(name, price, color, size) {
    Product.call(this, name, price);
    this.color = color;
    this.size = size;
}

// Copy the Product prototype 
// Changes in the Shirt.prototype don't affect the father (Product)
Shirt.prototype = Object.create(Product.prototype); 
Shirt.prototype.constructor = Shirt;

Shirt.prototype.increase = function(increaser) {
    this.price = this.price + (this.price * (increaser / 100));
};
Shirt.prototype.decrease = function(decreaser) {
    this.price = this.price - (this.price * (decreaser / 100));
};

function Keyboard(name, price, switch_type, size, stock) {
    Product.call(this, name, price)
    this.switch_type = switch_type;
    this.size = size;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: () => stock,
        set: (value) => stock = value
    });
}

Keyboard.prototype = Object.create(Product.prototype);
Keyboard.prototype.constructor = Keyboard;

// Product example
const spoon =  new Product('Metal Spoon', 5);
const shirt = new Shirt('T-Shirt Metallica', 80, 'Black', 'Large(L)');
const keyboard = new Keyboard('Tac75 HE', 300, 'Magnetic Astro', '75%', 8); // 8 activates Setter

console.log(spoon);
console.log(shirt);
console.log(keyboard);
console.log(keyboard.stock); // Getter
