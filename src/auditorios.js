const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            /* Coloque sua resposta aqui  */
            const nomeAuditorio = await rl.question('Nome do auditorio: ');
            const descricaoAuditorio = await rl.question('Descricão do auditorio: ');
            const capacidadeAuditorio = await rl.question('Capacidade do auditorio: ');

            const auditorio = new Auditorio(nomeAuditorio, descricaoAuditorio, capacidadeAuditorio);

            const crud = new AuditorioCrud();
            crud.criar(auditorio);
            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            const deletar = await rl.question('Qual o Codigo do auditorio que deseja deletar? ');

            const crud = new AuditorioCrud();
            crud.deletar(deletar);

            rl.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            const consulta = await rl.question('Qual o nome do auditorio que deseja consultar? ');

            const crud = new AuditorioCrud();
            crud.consultar(consulta);

            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
