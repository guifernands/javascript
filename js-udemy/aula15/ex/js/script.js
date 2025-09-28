const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>
        Raiz quadrado: ${Math.sqrt(numero)} <br>

        ${numero} é inteiro: ${Math.round(numero)}<br>

        É NaN: ${Number.isNaN(numero)} <br>

        Arredondado para baixo: ${Math.floor(numero)} <br>

        Arredondado para cima: ${Math.ceil(numero)} <br>

        Com duas casas decimais: ${numero.toFixed(2)} <br>           
</p>`;