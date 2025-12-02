const system = {};

Object.defineProperty(system, 'masterKey', {
    enumerable: false,
    configurable: false,

    get: function() { // get trigers when someone ask the value
        console.warn('ALERT! Someone saw the Master Key.'); // before get show the value it executes something
        return 'admin123'; // does not receive value, just returns
    }
});

const password = system.masterKey;
console.log(`The password is: ${password}`)