// leitor.js
const fs = require('fs').promises; // versão moderna com promises

async function main() {
  try {
    let texto = await fs.readFile('mensagem.txt', 'utf8');
    
    const textoOriginal = texto;
    console.log('Li isto:', textoOriginal);

    texto = texto.toUpperCase();
    
    const textoFinal = texto;

    // PASSO 3: Guardar num novo ficheiro chamado 'mensagem_caps.txt'
    // Dica: Usa o método await fs.writeFile(..., ...)
    
    /* O TEU CÓDIGO AQUI */

    fs.writeFile('mensagem.txt', textoFinal)

    console.log('Ficheiro criado com sucesso!');

  } catch (erro) {
    console.error('Ops, algo correu mal:', erro);
  }
}

main();