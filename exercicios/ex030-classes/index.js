class Usuario {
    // campos privados
    #nome;
    #email;

    constructor(nome, email) {
        this.#nome = nome;
        this.#email = email;
    }

    get nome() {
        return this.#nome; // retorna o valor privado
    }

    get email() {
        return this.#email;
    }

    set nome(nome) {
        if(nome.length < 4) {
            throw new Error('Nome curto');
        }
        this.#nome = nome;
    }

    exibirInfo() {
        return `Usuário: ${this.#nome} (${this.#email})`;
    }

    static buscarPorEmail(listaDeUsuarios, emailBuscado) {
        for(const usuario of listaDeUsuarios) {
            if(usuario.email === emailBuscado) {
                return usuario;
            }
        }
        return undefined;
    }    
}

class Jogador extends Usuario {
    #pontuacao;
    #nivel;
    #nick;

    constructor(nome, email, nick) {
        super(nome, email); // pega o nome e o email da classe pai

        this.#nick = nick;
        this.#pontuacao = 0;
        this.#nivel = 1;
    }

    ganharPontos(valor) {
        this.#pontuacao += valor;
        if(this.#pontuacao > 5000) return this.#nivel = 3; 
        if(this.#pontuacao > 1000) return this.#nivel = 2;
    }

    resetar() {
        this.#pontuacao = 0;
        this.#nivel = 1;
    }

    exibirInfo() {
        return `Jogador ${this.#nick} (Nível ${this.#nivel} - Pontos: ${this.#pontuacao})`;
    }
}

class Admin extends Usuario {
    #permissoes;

    constructor(nome, email, permissoes) {
        super(nome, email);
        this.#permissoes = [permissoes];
    }

    banir(jogadorAlvo) {
        jogadorAlvo.resetar();
        console.log(`O jogador ${jogadorAlvo.nome} foi banido e teve seus status resetados.`);
    }

    exibirInfo() {
        return `Admin ${this.nome} - Permissões: ${this.#permissoes.length}`;
    }
}

// --- ZONA DE TESTES (A MÁGICA ACONTECE AQUI) ---

// 1. Criando os personagens
const player1 = new Jogador('Guilherme', 'gui@gmail.com', 'GuiSlayer99');
const adm1 = new Admin('Roberto', 'roberto@ti.com', ['banir', 'editar', 'excluir']);

player1.ganharPontos(1200); 
console.log(player1.exibirInfo());

console.log(adm1.exibirInfo());
adm1.banir(player1);

// reseta status
console.log(player1.exibirInfo());

// estático
const lista = [player1, adm1];
console.log(Usuario.buscarPorEmail(lista, 'roberto@ti.com'));