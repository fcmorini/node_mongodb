const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const imovelSchema = new mongoose.Schema({
  endereco: {
    type: String,
    required: true,
  },
  complemento: {
    type: String,
    required: false,
  },
  mobiliado: {
    type: String,
    required: true,
  },
});

const ImovelModel = mongoose.model("Imovel", imovelSchema);

module.exports = ImovelModel;
