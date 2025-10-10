const filmes = [
    { titulo: "Interstellar", ano: 2014, diretor: "Nolan", generos: ["ficcao", "drama"] },

    { titulo: "Parasita", ano: 2019, diretor: "Bong", generos: ["drama", "thriller"] },

    { titulo: "Whiplash", ano: 2014, diretor: "Chazelle", generos: ["drama", "musica"] }
]

valor = filmes[2];

console.log(`${valor.titulo} (${valor.ano}) - ${valor.diretor}`);
