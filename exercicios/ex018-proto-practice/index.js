function Car(model, color) {
    this.model = model;
    this.color = color;

    // problem: the honk is created in every car, but it can already be in the obj (__proto__)
    /* this.honk = function() {
        return 'Beep beep!';
    } */

    // RIGHT WAY: injects the method in the prototype who in every obj, improve performace
    Car.prototype.honk = function() {
        return `${this.model}: Beep Beep!`
    };
}

const car1 = new Car('Up', 'Black');
const car2 = new Car('Prelude', 'Dark Grey');

console.log(car1.honk())
console.log(car2.honk())