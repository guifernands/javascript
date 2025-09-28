let valores = [3, 1, 6 ,0 , 4, 7]
valores.sort()
//console.log(valores)

/*
for (let pos=0; pos<valores.length; pos++) {
    console.log(`O elemento ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`O elemento ${pos} tem o valor ${valores[pos]}`)  
}