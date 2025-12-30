function simularPedido() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pedido pronto!');
        }, 2000)
    })
}

async function receberPedido() {
    console.log('Fazendo pedido...')
    // await pausou o código e esperou a promise resolver
    const resultado = await simularPedido();
    console.log(resultado);
}

receberPedido();