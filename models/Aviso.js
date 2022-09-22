import mongoose from "mongoose";

const avisoSchema = new mongoose.Schema({
  inmueble_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Inmueble'
  },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  },
  plazo: {
    type: Date
  },
  precioAviso: {
    type: Number
  },
  operacion: {
    type: String
  },
  monedaOperacion: {
    type: String,
    enum: ['U$S', '$']
  },
  montoOperacion: {
    type: Number,
    min: 0
  },
  nombreAnunciante: {
    type: String
  },
  mailContacto: {
    type: String
  },
  destacado: {
      type: Boolean,
      default: false
  } 
});

const Aviso = mongoose.models['aviso'] || mongoose.model("aviso", avisoSchema);
module.exports = Aviso;