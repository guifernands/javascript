const { join } = require("core-js/core/array");

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genUpper = () => String.fromCharCode(rand(65, 91));
const genLower = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '!@#$%^&*(){}[.,];:/><_+=-~`"';
const genSymbol = () => symbols[rand(0, symbols.length)];

function genPassword(length, upper, lower, num, sym) {
    const pwArray = [];

    // if upper, lower, num, sym are true.. executes...
    for(let i = 0; i < length; i++) {
        upper && pwArray.push(genUpper());
        lower && pwArray.push(genLower());
        num && pwArray.push(genNumber());
        sym && pwArray.push(genSymbol());
    }
    console.log(pwArray.join(''));
}

genPassword(10, true, true, true, true); 