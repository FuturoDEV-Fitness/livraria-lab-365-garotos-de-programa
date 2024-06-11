const crypto = require("crypto");

class Instrumento {

    #codigo = ""
    #nome = ""
    #tipo = ""
    #estado = ""

    constructor(nome, tipo, estado) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome
        this.#tipo = tipo
        this.#estado = estado
    }

    get getCodigo() {
        return this.#codigo
    }


    get getNome() {
        return this.#nome
    }
    set setNome(novoNome) {
        this.#nome = novoNome
    }


    get getTipo() {
        return this.#tipo
    }
    set setTipo(novoTipo) {
        this.#tipo = novoTipo
    }


    get getEstado() {
        return this.#estado
    }
    set setEstado(novoEstado) {
        this.#estado = novoEstado
    }

}

module.exports = Instrumento;