const fs = require('fs');
const Auditorio = require('./Auditorio');


class AuditorioCrud {

    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    criar(auditorio) {
        const conteudoDoArquivo = JSON.parse(fs.readFileSync(this.filePath, "UTF-8"));

        conteudoDoArquivo.push({
            Nome_Auditorio: auditorio.getNomeAuditorio,
            Descricao_Auditorio: auditorio.getDescricaoAuditorio,
            Capacidade_Auditorio: auditorio.getCapacidadeAuditorio,
            Codigo: auditorio.getCodigo
        })

        console.log(auditorio)
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoDoArquivo, null, 2),
            "UTF-8"
        )
    }

    consultar(consulta) {
        const conteudoDoArquivo = JSON.parse(fs.readFileSync(this.filePath, "UTF-8"));

        const auditorioEncontrado = conteudoDoArquivo.find(
            auditorio => auditorio.Nome_Auditorio === consulta
        ) || "Auditorio nao encontrado";

        console.log(auditorioEncontrado)
    }

    deletar(codigo) {
        const conteudoDoArquivo = JSON.parse(fs.readFileSync(this.filePath, "UTF-8"));

        const deletarAuditorio = conteudoDoArquivo.filter(auditorio => auditorio.Codigo != codigo);

        if (conteudoDoArquivo.length == deletarAuditorio.length) {
            console.log("Auditorio nao encontrado");
        } else {
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(deletarAuditorio, null, 2),
                "UTF-8"
            )

            console.log("Auditorio deletado com sucesso");
        }

    }
}

module.exports = AuditorioCrud;