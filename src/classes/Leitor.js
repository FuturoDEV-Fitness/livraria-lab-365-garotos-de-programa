const crypto = require("crypto");

class Leitor {
  #codigo = "";
  #nome = "";
  #rg = "";
  #cpf = "";
  #data_nascimento = "";

  constructor(nome, rg, cpf, data_nascimento) {
    this.#codigo = crypto.randomUUID();
    this.#nome = nome;
    this.#rg = rg;
    this.#cpf = cpf;
    this.#data_nascimento = data_nascimento;
  }

  get getCodigo() {
    return this.#codigo;
  }
  get getNome() {
    return this.#nome;
  }

  set setNome(value) {
    this.#nome = value;
  }

  get getRg() {
    return this.#rg;
  }
  set setRg(value) {
    this.#rg = value;
  }

  get getCpf() {
    return this.#cpf;
  }

  set setCpf(value) {
    this.#cpf = value;
  }

  get getData_nascimento() {
    return this.#data_nascimento;
  }

  set setData_nascimento(value) {
    this.#data_nascimento = value;
  }
}

module.exports = new Leitor();
