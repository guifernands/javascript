const fruits = ['banana', 'apple', 'orange', 'banana', 'apple', 'banana'];

const counting = fruits.reduce(function(acc, fruit){
    if (acc[fruit]) {   // fruit already known?
        acc[fruit]++;   // if yes +1
    } else {            // if not
        acc[fruit] = 1; // = 1
    }
    return acc;         // return updated to the next loop
}, {}); // {} -> acc turns into an empty object initially

console.log(counting);