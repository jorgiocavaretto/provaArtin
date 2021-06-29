const express = require("express")
const Produto = require("../models/produtos")

const route = express.Router()

route.post("/", async (req, res) => {

    await Produto.create(req.body, (err, ret) => {
        if (err)
            return res.send(err.message)

        return res.send(ret)
    })
})
route.put("/", async (req, res) => {

    await Produto.findByIdAndUpdate(req.body.id, {$set: req.body}, (err, ret) => {
      if (err)
        return res.send(err.message)

        return res.send(ret)
    })
})
route.delete("/", async (req, res) => {
    await Produto.findByIdAndUpdate(req.body.id, {$set: {ativo: false}}, (err, ret) => {
        if (err)
            return res.send(err.message)

        return res.send(ret)
    })
})
module.exports = app => app.use("/admin/produtos", route)