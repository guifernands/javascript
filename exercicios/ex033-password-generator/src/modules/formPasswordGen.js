import genPassword from "./generator";

const generatedPassword = document.querySelector('.generated-pw');
const charLength = document.querySelector('.characters');
const wUppers = document.querySelector('.withUpper');
const wLowers = document.querySelector('.withLower');
const wNumbers = document.querySelector('.withNumbers');
const wSymbols = document.querySelector('.withSymbols');
const generatePassword = document.querySelector('.generate');

export default () => {
    generatePassword.addEventListener('click', (e) => {
        e.preventDefault();
        generatedPassword.innerHTML = generate();
    });
};

function generate() {
    const password = genPassword(
        charLength.value,
        wUppers.checked,
        wLowers.checked,
        wNumbers.checked,
        wSymbols.checked
    );

    return password || 'Nada selecionado.';
}