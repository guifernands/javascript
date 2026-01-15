const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genNumber = () => String.fromCharCode(rand(48, 58));
const genUpper = () => String.fromCharCode(rand(65, 91));
const genLower = () => String.fromCharCode(rand(97, 123));
const symbols = '!@#$%^&*(){}[.,];:/><_+=-~`"';
const genSymbol = () => symbols[rand(0, symbols.length)];

export default function genPassword(length, upper, lower, num, sym) {
    const pwArray = [];

    // if upper, lower, num, sym are true.. executes...
    for(let i = 0; i < length; i++) {
        if(upper) pwArray.push(genUpper());
        if (lower) pwArray.push(genLower());
        if (num) pwArray.push(genNumber());
        if (sym) pwArray.push(genSymbol());
    }
    return pwArray.join('');
}