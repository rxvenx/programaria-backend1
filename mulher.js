// http://localhost:3333/

const express = require("express")
const router = express.Router()

function mostraMulher(request, response) {
    response.json({
        nome: 'Jane Smith',
        imagem: 'foto.png',
        minibio: 'foto aleatoria'
    })

}



const app = express()
const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta) 



/* 
    [
        {
            objeto
        },

        {
            objeto
        }
    ]
*/