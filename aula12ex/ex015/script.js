function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    
    sect = document.querySelector('section#sect')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }   
    
    else {
            fsex = document.getElementsByName('radsex')

            idade = ano - Number(fano.value)

            genero = ''
            img = document.createElement('img')
            img.setAttribute('id', 'foto')

            if (fsex[0].checked) {
                genero = 'homem'
                if (idade >= 0 && idade < 9) {
                    img.setAttribute('src', 'imagens/homem-bebe.jpg')
                } 

                else if (idade < 14) {
                    img.setAttribute('src', 'imagens/homem-crianca.jpg')
                } 

                else if (idade < 50) {
                    img.setAttribute('src', 'imagens/homem-adulto.jpg')
                } 

                else {
                    img.setAttribute('src', 'imagens/homem-idoso.jpg')
                }
            }

            else if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade < 11) {
                    img.setAttribute('src', 'imagens/mulher-bebe.jpg')
                } 

                else if (idade < 21) {
                    img.setAttribute('src', 'imagens/mulher-crianca.jpg')
                } 

                else if (idade < 50) {
                    img.setAttribute('src', 'imagens/mulher-adulto.jpg')
                } 

                else {
                    img.setAttribute('src', 'imagens/mulher-idoso.jpg')
                }
            }

            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

            sect.style.height = 'auto'
            img.style.width = '200px'
            img.style.height = '200px'
            img.style.borderRadius = '30px'
            res.appendChild(img)
        }
    
}