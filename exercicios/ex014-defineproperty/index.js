const safe = {};
Object.defineProperty(safe, 'secretCode', { // arguments: where?, what?, how?
    value: '1234-XYZ',      
    writable: false,        // cannot be changed
    configurable: false,    // cannot be deleted/reconfigurated
    enumerable: false       // cannot appear in logs/loops 
});

for(key in safe) console.log(safe.secretCode); // fail
safe.secretCode = '4321-ZYX';   // fail
delete safe.secretCode;         // fail   
console.log(safe.secretCode);   // work
