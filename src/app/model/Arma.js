const mongoose = require("mongoose");

//const options = { discriminatorKey: 'arma' };

const Artefato = require("../model/Artefato");

const ArmaSchema = new mongoose.Schema(
    {
        comprimento_cano: {
            type: String,
            required: true
        },
    }
  );

module.exports = Artefato.discriminator('arma', ArmaSchema);