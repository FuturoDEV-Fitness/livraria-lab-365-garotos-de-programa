const crypto = require('crypto');

class Auditorio {

    #codigo = ''
    #nomeAuditorio = ''
    #descricaoAuditorio = ''
    #capacidadeAuditorio = 0

    constructor(nomeAuditorio, descricaoAuditorio, capacidadeAuditorio) {
        this.#nomeAuditorio = nomeAuditorio 
        this.#descricaoAuditorio = descricaoAuditorio
        this.#capacidadeAuditorio = capacidadeAuditorio
        this.#codigo = crypto.randomUUID()
    }

    get getCodigo() {
        return this.#codigo
    }

    get getNomeAuditorio() {
        return this.#nomeAuditorio
    }

    set setNomeAuditorio(nomeAuditorio) {
        this.#nomeAuditorio = nomeAuditorio
    }

    get getdescricaoAuditorio() {
        return this.#descricaoAuditorio
    }

    set setDescricaoAuditorio(descricaoAuditorio) {
        this.#descricaoAuditorio = descricaoAuditorio
    }   

    get getCapacidadeAuditorio() {
        return this.#capacidadeAuditorio
    }   

    set setCapacidadeAuditorio(capacidadeAuditorio) {
        this.#capacidadeAuditorio = capacidadeAuditorio
    }

}

module.exports = Auditorio;