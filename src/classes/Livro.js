const crypto = require("crypto");

class Livro {

    #codigo = ''
    #nome = ''
    #paginas = 0
    #genero = ''
    #autor = ''

    constructor(nome, paginas, genero, autor) {
       this.#codigo = crypto.randomUUID()
       this.#nome = nome
       this.#paginas = paginas
       this.#genero = genero
       this.#autor = autor
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
        get getPaginas() {
        return this.#paginas
        }

        set setpaginas(novaPaginas) {
            this.#paginas = novaPaginas
        }
        get getGenero() {
        return this.#genero
        }
        set setGenero(novoGenero) {
            this.#genero = novoGenero
        }
        get getAutor() {
        return this.#autor
        }
        set setAutor(novoAutor) {
            this.#autor = novoAutor
        }

}

module.exports = Livro;