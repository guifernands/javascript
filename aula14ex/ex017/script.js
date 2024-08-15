function gerar() {
    num = document.getElementById('n')
    tab = document.getElementById('resultado')

    num = Number(num.value)

    x1 = document.getElementById('tab1')
    x1.innerHTML = `${num} x 1 = ${num*1}`

    x2 = document.getElementById('tab2')
    x2.innerHTML = `${num} x 2 = ${num*2}`

    x3 = document.getElementById('tab3')
    x3.innerHTML = `${num} x 3 = ${num*3}`

    x4 = document.getElementById('tab4')
    x4.innerHTML = `${num} x 4 = ${num*4}`

    x5 = document.getElementById('tab5')
    x5.innerHTML = `${num} x 5 = ${num*5}`

    x6 = document.getElementById('tab6')
    x6.innerHTML = `${num} x 6 = ${num*6}`

    x7 = document.getElementById('tab7')
    x7.innerHTML = `${num} x 7 = ${num*7}`

    x8 = document.getElementById('tab8')
    x8.innerHTML = `${num} x 8 = ${num*8}`

    x9 = document.getElementById('tab9')
    x9.innerHTML = `${num} x 9 = ${num*9}`

    x10 = document.getElementById('tab10')
    x10.innerHTML = `${num} x 10 = ${num*10}`
}   