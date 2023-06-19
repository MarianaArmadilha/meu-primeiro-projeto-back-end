const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({ 
        nome: 'Mariana Carvalho',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFeP-m0hoFnDA/profile-displayphoto-shrink_800_800/0/1668613799276?e=1692230400&v=beta&t=hTg8cJZI_Jv0AK8Cr22N-yrXeO5abSnjKjNh5bOdlno',        
        minibio: "Sou Analista e Desenvolvedora de Sistemas"
    })
}

function mostraPorta() {
console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)