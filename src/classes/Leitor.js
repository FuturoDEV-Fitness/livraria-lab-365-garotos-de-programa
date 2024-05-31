class Leitor {
  #codigo = 0;
  #nome = "";
  #rg = "";
  #cpf = "";
  #data_nascimento = "";
  constructor(codigo, nome, rg, cpf, data_nascimento) {
    this.#codigo = codigo;
    this.#nome = nome;
    this.#rg = rg;
    this.#cpf = cpf;
    this.#data_nascimento = data_nascimento;
  }
  get codigo() {
    return this.#codigo;
  }

  set codigo(value) {
    this.#codigo = value;
  }

  get nome() {
    return this.#nome;
  }

  set nome(value) {
    this.#nome = value;
  }

  get rg() {
    return this.#rg;
  }
  set rg(value) {
    this.#rg = value;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(value) {
    this.#cpf = value;
  }

  get data_nascimento() {
    return this.#data_nascimento;
  }
  set data_nascimento(value) {
    this.#data_nascimento = value;
  }
}

module.exports = new Leitor();
