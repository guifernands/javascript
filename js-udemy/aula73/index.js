// Useful methods for objects
// Obeject.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ... (spread)

// Already seen
// Object.keys (return the keys)
// Object.freeze (freezes the object, no writable and configurable)
// Object.defineProperty (define an property)
// Object.defineProperties (define more than one property)

const product = { name: 'Product', price: 1.8 };
const cup = Object.assign({}, product, { material: 'plastic' }); // product copy with adds (material)

console.log(Object.getOwnPropertyDescriptor(product, 'name')); // show a property config: value, writable, enumerable and configurable