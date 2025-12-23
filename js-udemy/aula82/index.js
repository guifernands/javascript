class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) return console.log("Já está ligado!");
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) return console.log("Já está desligado!");
        this.ligado = false;
    }
}

class Relogio extends DispositivoEletronico { // extends herda 
    constructor(nome, cor, modelo) {
        super(nome); // passa o nome para o contructor "pai"
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar.');
    }

    bateria() {
        console.log('A bateria está em tantos %.'); // método exclusivo do tablet
    }
}

const r1 = new Relogio('Orient', 'Prata', 'MBSS 1287');
r1.desligar();
console.log(r1);

const t1 = new Tablet('iPad', true);
console.log(t1);