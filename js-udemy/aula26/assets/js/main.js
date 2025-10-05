function calcula(event) {
    event.preventDefault();
    document.querySelector('#form-imc').addEventListener('submit', function e() {e.preventDefault()});
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#altura').value);
    let imc;
    let resultado = document.querySelector('#resultado');

    if (isNaN(peso)) {
        resultado.innerHTML = "<p>[ERRO] Digite um peso válido.</p>";
        return;
    } else if (isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "<p>[ERRO] Digite uma altura válida.</p>";
        return;
    }

    imc = (peso / (altura ** 2)).toFixed(1);

    if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
        } else if (imc < 25) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
        } else if (imc < 30) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
        } else if (imc < 35) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc < 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
    }
}