const fs = require("fs");


class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    criar(instrumento) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))

        conteudoAtual.push({
            codigo: instrumento.getCodigo,
            nome: instrumento.getNome,
            tipo: instrumento.getTipo,
            estado: instrumento.getEstado,
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(
                conteudoAtual, null, 2
            ),
            "utf-8"
        )

    }
}

module.exports = InstrumentoCrud;