const fs = require("fs");
class LeitorCrud {
  constructor() {
    this.filePath = "./src/files/leitores.json";
  }

  ler() {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }
  criar(leitor) {
    const data = this.ler();
    data.push({
      codigo: leitor.getCodigo,
      nome: leitor.getNome,
      rg: leitor.getRg,
      cpf: leitor.getCpf,
      data_nascimento: leitor.getData_nascimento,
    });
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), "utf-8");
    return;
  }

  alterar(cpf, leitor) {
    const data = this.ler();
    const alterarLeitor = data.filter((person) => person.cpf != cpf);
    alterarLeitor.push({
      codigo: leitor.getCodigo,
      nome: leitor.getNome,
      rg: leitor.getRg,
      cpf: leitor.getCpf,
      data_nascimento: leitor.getData_nascimento,
    });

    fs.writeFileSync(
      this.filePath,
      JSON.stringify(alterarLeitor, null, 2),
      "utf-8"
    );
    console.log(`Leitor com CPF ${cpf} alterado com sucesso`);
  }

  deletar(cpf) {
    const data = this.ler();
    const deleteLeitor = data.filter((person) => person.cpf != cpf);

    if (data.length == deleteLeitor.lenght) {
      console.log("Não foi encontrado o Leitor com esse nome");
    } else {
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(deleteLeitor, null, 2),
        "utf-8"
      );
      console.log(`Leitor com o cpf: ${cpf} foi deletado com sucesso`);
    }
  }
}

module.exports = new LeitorCrud();
