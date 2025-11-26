const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// ... rest -> ... spread
const a3 = [...array1, 'Gui', ...array2, ...[7, 8, 9]];
console.log(a3);