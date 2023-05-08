// http://localhost:3333/

const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333
const mulheres = [
        {
            nome: 'Teste Um',
            imagem: 'um.png',
            minibio: 'minibio um'
        },
        {
            nome: 'Teste Dois',
            imagem: 'dois.png',
            minibio: 'minibio dois'
        },
        {
            nome: 'Teste Tres',
            imagem: 'tres.png',
            minibio: 'minibio tres'
        },
    ]

function mostraMulheres (request, response) {
    response.json(mulheres)

}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta) 

