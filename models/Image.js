import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese un nombre"],
        unique: false,
    },
    imagen: {
        type: Buffer,
        contentType: String,
    },
});

const Imagen = mongoose.models['Imagenes'] || mongoose.model("Imagenes", userSchema);
module.exports = Imagen;