import './assets/css/style.css';

const generate = document.querySelector('.generate');

generate.addEventListener('click', function(e) {
    e.preventDefault();
    new PasswordGenerator;
});

class PasswordGenerator {
    constructor() {
        this.characters = document.querySelector('.characters').value;
        this.numbers = document.querySelector('.withNumbers').checked;
        this.upperLetters = document.querySelector('.withUpper').checked;
        this.lowerLetters = document.querySelector('.withLower').checked;
        this.symbols = document.querySelector('.withSymbols').checked;

        this.numbersList = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0
        ];

        this.lettersList = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        this.symbolsList = [
            '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '<', '>', '~', '!'
        ];

        this.validator();
    }

    validator() {
        // password chars type order
        this.passwordOrder = [
            this.upperLetters,  // first
            this.lowerLetters,  // second
            this.numbers,       // ...
            this.symbols
        ];

        // password length
        this.size = Number(this.characters);

        // characters validator
        if(this.size > 30 || this.size < 3) {
            return alert('[ERRO] A senha deve ter entre 3-30 caracteres');
        }

        // creates the password w the size/length typed
        this.password = new Array(this.size).fill('');
    }

    upperValidator() {
        if(this.passwordOrder[1]) {
            this.password[1] = rand(this.lettersList);
        } else {
            this.passwordOrder.pop(1);
        }
    }
    // como fazer pra voltar para o upper depois do quarto caracter e se não for 
    lowerValidator() {
        if(this.passwordOrder[2]) {
            this.password[] = 
        } else {
            this.passwordOrder.pop(2);
        }
    }

    numbersValidator() {
        if(this.passwordOrder[3]) {
            this.password
        } else {
            this.passwordOrder.pop(3);
        }
    }

    symbolsValidator() {
        if(this.passwordOrder[4]) {
            this.password
        } else {
            this.passwordOrder.pop(4);
        }
    }

    rand(list) {
        return Math.floor(Math.random() * list.length);
    }
}