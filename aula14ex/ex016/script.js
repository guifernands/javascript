function contar() {
    let ini = parseInt(document.getElementById('inicio').value)
    let fi = parseInt(document.getElementById('fim').value)
    let pas = parseInt(document.getElementById('passo').value)

    res = document.getElementById('resultado')

    if ( isNaN(ini) || isNaN(fi) || isNaN(pas) ) {
        alert('[ERRO] Preencha os dados.')
    }  
    
    else if (pas == 0) {
        alert('[ERRO] Passo inválido.')
    }
    
    else {
        res.innerHTML = `Contando: <br>`
        if (fi > 0) {
            while (ini <= fi) {
                ini += pas

                if (ini <= fi){
                    res.innerHTML += `${ini} ` + '\u{1F449} '
                }
            }
            res.innerHTML += '\u{1F3C1}'
        }    
        else if (fi <= 0) {
            while (ini >= fi) {
                ini -= pas

                if (ini >= fi){
                    res.innerHTML += `${ini} ` + '\u{1F449} '
                }
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}