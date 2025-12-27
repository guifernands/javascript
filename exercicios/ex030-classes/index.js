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
}

const user1 = new Usuario('Guile', 'guifernandes@gmail.com');
const user2 = new Usuario('Askelad', 'askelad321@hotmail.com');
const user3 = new Usuario('Knight', 'knight000@outlook.com');

const bancoDeDados = [user1, user2, user3];

// 3. Testando o método Estático
const resultadoBusca = Usuario.buscarPorEmail(bancoDeDados, 'askelad321@hotmail.com');

console.log(resultadoBusca); 
// Deve imprimir o objeto Usuario do Askelad