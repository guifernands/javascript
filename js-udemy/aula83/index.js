class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // métodos de instância
    aumentar() {
        if(this.volume >= 100) return console.log('O volume está no máximo: 100.');
        this.volume += 20;
        console.log(`Volume: ${this.volume}`);
    }
    diminuir() {
        if(this.volume === 0 || !this.volume) return console.log('O volume está no mudo: 0.');
        this.volume -= 20;
        console.log(`Volume: ${this.volume}`);
    }

    // método estático, só pode ser acessado pela classe!!!
    static trocaPilha() {
        console.log('Pilhas trocadas!')
    }
}

ControleRemoto.trocaPilha(); // funciona assim, mas não chama o construtor da classe
const controle = new ControleRemoto('Smart TV')
controle.aumentar()
console.log(controle)
