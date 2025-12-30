function simularPedido() {
    // nesse caso a promise recebe apenas resolve
    return new Promise((resolve) => {
        setTimeout(() => {
            // depois de 2 segundos o resolve joga para o then...
            resolve('Pedido pronto!');
        }, 2000)
    })

}

simularPedido()
    // quando chega no resolve ativa o then, e o then tem que ser uma function
    .then(resposta => console.log(resposta));