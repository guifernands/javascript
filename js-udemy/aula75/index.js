// new Object -> Object.prototype
const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
    // IMPORTANT! objA.__proto__ === Object.prototype -> true
};

const objB = {
    keyB: 'B'
    // __proto__: Object.prototype
};

const objC = new Object;
objC.keyC = 'C';

// configure prototype from who?(objB) who gonna be him prototype? (objA)
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(Object.getPrototypeOf(objB));
