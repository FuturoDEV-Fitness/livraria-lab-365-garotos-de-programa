const fs = require("fs")

class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

        consultar(nomeDoLivro) {
            const data = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))
            const consultaTrue = data.find((livro) => livro.nome == nomeDoLivro)
            
            if(consultaTrue) {
                console.log(consultaTrue)
            } 
            else {
                console.log("Livro não encontrado")
            }
        }
        
        deletar(codDoLivro) {
            const data = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))
            const livroDeletado = data.findIndex((livro) => livro.codigo == codDoLivro)

            if(livroDeletado) {
                data.splice(livroDeletado, 1)
    
                fs.writeFileSync(
                    this.filePath,
                    JSON.stringify(
                        data, null, 2
                    ),
                    "utf-8"
                )
            } 
            else {
                console.log("Código de livro não encontrado")
            }
        }


        criar(livro){
            const data = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))

            data.push({
                codigo: livro.getCodigo,
                nome: livro.getNome,
                paginas: livro.getPaginas,
                autor: livro.getAutor,
                genero: livro.getGenero
            })

            fs.writeFileSync(
                this.filePath,
                JSON.stringify(
                    data, null, 2
                ),
                "utf-8"
            )
        }
}

module.exports = LivroCrud;