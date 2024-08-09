agora = new Date()
hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12 && hora > 4) {
    console.log('Bom dia!')
} else if (hora <= 17 && hora > 12) {
    console.log('Boa tarde!')
} else if (hora <= 23 && hora > 17) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}