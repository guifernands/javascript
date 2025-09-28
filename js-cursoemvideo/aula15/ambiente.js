let num = [1, 0, 12]
num.push(3)
num.sort()

console.log(num)
console.log(`O array tem ${num.length} elementos.`)
console.log(`A primeira posição do array está ocupada por ${num[0]}`)
let pos = num.indexOf(12)

if (pos == -1){
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor 12 está na posição ${pos}`)
}
