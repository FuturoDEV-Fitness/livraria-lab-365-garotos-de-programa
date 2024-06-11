const readline = require("readline/promises");
const Leitor = require("./classes/Leitor");
const LeitorCrud = require("./classes/LeitorCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const leitor = Leitor;
const crud = LeitorCrud;

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const nome = await rl.question("Nome do Leitor:");
      const rg = await rl.question("RG do Leitor:");
      const cpf = await rl.question("Cpf do Leitor:");
      const data_nascimento = await rl.question(
        "Data de nascimento do Leitor:"
      );
      leitor.setNome = nome;
      leitor.setRg = rg;
      leitor.setCpf = cpf;
      leitor.setData_nascimento = data_nascimento;

      crud.criar(leitor);

      rl.close();
      break;
    case "alterar": {
      const cpf = await rl.question(
        "Qual é o Cpf do leitor que você quer deletar?"
      );
      const nome = await rl.question("Nome do Leitor:");
      const rg = await rl.question("RG do Leitor:");
      const data_nascimento = await rl.question(
        "Data de nascimento do Leitor:"
      );

      leitor.setNome = nome;
      leitor.setRg = rg;
      leitor.setData_nascimento = data_nascimento;
      crud.alterar(cpf, leitor);
      break;
    }
    case "deletar": {
      const cpf = await rl.question(
        "Qual é o Cpf do leitor que você quer deletar?"
      );
      crud.deletar(cpf);
      rl.close();
      break;
    }

    case "consultar":
      console.log(crud.ler());
      rl.close();
      break;

    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
