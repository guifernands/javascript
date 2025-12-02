let _level = 'INFO';
const system = {};

Object.defineProperty(system, 'logLevel', {
    get: () =>  _level,

    set: newValue => {
        if (newValue === 'INFO' || newValue === 'WARN' || newValue === 'ERROR') { // if newValue not equal, show a error
            _level = newValue;
            console.log(`Level state changed successfully. Level: ${_level}`);
        }
        else { // error
            console.log('[ERROR] Level state invalid.')
        }
    }
 });

system.logLevel = 'WARN'; 
// "Level state changed successfully. Level: WARN"

system.logLevel = 'Gustavo Lima'; 
// "[ERROR] Level state invalid."

console.log(system.logLevel); 
// Console: "WARN" ('Gustavo Lima' was ignored)