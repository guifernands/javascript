function carregar () {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12 && hora >= 0) {
        img.src = 'manha.jpg'
        document.body.style.background = 'green'
    }   else if (hora >= 12 && hora < 18) {
            img.src = 'tarde.jpg'
            document.body.style.background = 'orange'
    }   else if (hora >= 18 && hora < 24) {
            img.src = 'noite.jpg'
            document.body.style.background = 'purple'
    }   else if (hora > 24 || hora < 0){
        window.alert('[ERRO] Horário inválido.')
    }
}   
