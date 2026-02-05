// leitor.js
const fs = require('fs').promises; // versão moderna com promises

async function main() {
  try {
    let textoOriginal = await fs.readFile('mensagem.txt', 'utf8');
    console.log('Li isto:', textoOriginal);

    textoOriginal = textoOriginal.toUpperCase(); // letras maiúsculas
    
    const textoFinal = textoOriginal;
    await fs.writeFile('mensagem.txt', textoFinal); // substitui o arquivo por um com o novo texto

    console.log('Ficheiro criado com sucesso, novo texto:', textoFinal);

  } catch (e) {
    console.error('Ops, algo correu mal:', e);
  }
}

main();