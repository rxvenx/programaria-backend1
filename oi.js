// http://localhost:3333/

const express = require("express")
const router = express.Router() //função tem que abrir e fechar parenteses no fim


const app = express()
const porta = 3333



function mostraOla(request, response) {
    response.send("oi")


}

function voceConseguiu(request, response) {
    response.send("TOPE, MANDOU BEM")
}



function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get("/ola", mostraOla))
app.use(router.get("/tente", voceConseguiu)) //cada rota nova tem que reiniciar o cmd, ocege, roda de novo
app.listen(porta, mostraPorta) 

