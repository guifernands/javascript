import './assets/css/style.css';

const generate = document.querySelector('.generate');

generate.addEventListener('click', function(e) {
    e.preventDefault();
    new PasswordGenerator;
});

class PasswordGenerator {
    constructor() {
        const characters = document.querySelector('.characters').value;
        const upper_letters = document.querySelector('.with-upper-letters').checked;
        const lower_letters = document.querySelector('.with-lower-letters').checked;
        const symbols = document.querySelector('.with-symbols').checked;

        console.log(characters, upper_letters, lower_letters, symbols);
    }
}