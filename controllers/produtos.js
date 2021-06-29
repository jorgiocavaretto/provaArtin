const express = require("express")
const Produto = require("../models/produtos")

const route = express.Router()

route.get("/", async (req, res) => {
  var lista = await Produto.find()
  return res.send(lista)
})
module.exports = app => app.use("/lista/produtos", route)