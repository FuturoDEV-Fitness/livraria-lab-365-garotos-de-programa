const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeLivro = await rl.question("Qual o nome do livro? ")
            const paginaLivro = await rl.question("Quantas páginas tem o livro? ")
            const generoLivro = await rl.question("Qual o gênero literário do livro? ")
            const autorLivro = await rl.question("Qual o nome do autor do livro? ")
            const codigoLivro = 123123

            const livro = new Livro(codigoLivro, nomeLivro, paginaLivro, generoLivro, autorLivro)
            const livroCrud = new LivroCrud()

            livroCrud.criar(livro)
            
            rl.close();
            break;
        case 'deletar': {
            const codDoLivro = await rl.question("Qual o código do livro? (Consulte no menu anterior!) ")
            const livroCrud = new LivroCrud()

            livroCrud.deletar(codDoLivro)
            rl.close();
            break;
        }
        case 'consultar': {
            const nomeDoLivro = await rl.question("Qual o nome do livro? ")
            const livroCrud = new LivroCrud()

            livroCrud.consultar(nomeDoLivro)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
