const moongose = require('../database/database')

const Produtos = moongose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type:Number,
        required: true
    },
    ativo: {
        type:Boolean,
        required: true,
        default: true
    }
})

const Produto = moongose.model('produtos', Produtos)

module.exports = Produto