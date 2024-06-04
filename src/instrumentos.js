const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/InstrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeInstrumento = await rl.question("Qual o nome do instrumento? ")
            const tipoInstrumento = await rl.question("Qual o tipo do instrumento? ")
            const estadoInstrumento = await rl.question("Qual o estado do instrumento? ")
            

            const instrumento = new Instrumento(nomeInstrumento, tipoInstrumento, estadoInstrumento)
            const instrumentoCrud = new InstrumentoCrud()

            instrumentoCrud.criar(instrumento)
            
            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
