const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
   res.send("Parabéns você chegou até aqui.")
})

//Aberta
require("./controllers/login")(app)
require("./controllers/produtos")(app)
require("./controllers/usuarios")(app)
const middleware = require('./middleware/autenticar')
app.use(middleware)

//Fechada
require("./controllers/admin_produtos")(app)

app.use((req, res) => {
    res.send("Página não encontrada")
})
app.listen(process.env.PORT || 80, () => {
    console.log("servidor online")
})