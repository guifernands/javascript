// importa o módulo "File System" do node, o .promises serve para usarmos a verão mais moderna usando await ao envés da antiga usando callbacks
const fs = require('fs').promises;

async function criarArquivoDeVersao() {
    const dados = await fs.readFile('./package.json', 'utf8'); // utf8 pra ler como letras (sem isso ele lê em binário)

    const json = JSON.parse(dados); // transforma os dados puros em um objeto

    const conteudoJS = `export const versao = "${json.version}";` // "0.0.0" ficaria desse jeito

    await fs.writeFile('./src/versao.js', conteudoJS); // argumento 1: onde salvar o arquivo. argumento 2: conteúdo
}

criarArquivoDeVersao();