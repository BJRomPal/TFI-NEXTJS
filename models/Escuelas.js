import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: false,
    },
    calle: {
        type: String,
        required: true,
        unique: false,
    },
    numero: {
        type: int,
        required: true,
        unique: false,
    },
    barrio: {
        type: String,
        required: true,
        unique: false
    },
    nivel: {
        type: String,
        required: true,
        unique: false
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

const Escuela = mongoose.models['Escuelas'] || mongoose.model("Escuelas", userSchema);
module.exports = Escuela;