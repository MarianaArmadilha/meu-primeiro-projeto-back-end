const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Mariana Carvalho',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFeP-m0hoFnDA/profile-displayphoto-shrink_800_800/0/1668613799276?e=1692230400&v=beta&t=hTg8cJZI_Jv0AK8Cr22N-yrXeO5abSnjKjNh5bOdlno',
        minibio: "Sou Analista e Desenvolvedora de Sistemas"
    },
    {
        nome: 'Alice Carvalho',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQHWUt0yYIv26A/profile-displayphoto-shrink_800_800/0/1652724651797?e=1692230400&v=beta&t=xYSjsDfzULAZLfytnnDxqa3ZDKwI0bV00TAxbmdQrT0',
        minibio: 'É a melhor Bióloga do mundo'
    },
    {
        nome: 'Morgana Damásio',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQEKAGA-3Ab4LQ/profile-displayphoto-shrink_800_800/0/1664245582938?e=1692230400&v=beta&t=BPlSHACfAkhR02FbKE6np9sPnGcw3k3Xy1GmKX2tnw0',
        minibio: 'É a melhor Jornalista do mundo' 
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)