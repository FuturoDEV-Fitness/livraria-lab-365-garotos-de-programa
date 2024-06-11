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

    consultar(instrumentoBuscado){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))

        const instrumentoEncontrado = conteudoAtual.find(instrumento => instrumento.nome === instrumentoBuscado)

        if (instrumentoEncontrado){
            console.log(instrumentoEncontrado)
        } else{
            console.log("Instrumento não encontrado")
        }
    }

    deletar(codigoInstrumentoBuscado){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))

        const instrumentoEncontrado = conteudoAtual.findIndex(instrumento => instrumento.codigo === codigoInstrumentoBuscado)

        if (instrumentoEncontrado !== -1) {
            conteudoAtual.splice(instrumentoEncontrado, 1)

            fs.writeFileSync(
                this.filePath,
                JSON.stringify(
                    conteudoAtual, null, 2
                ),
                "utf-8"
            )

            console.log("Instrumento deletado com sucesso")
            
        }else{
            console.log("Código não cadastrado")
        }

    }
}

module.exports = InstrumentoCrud;