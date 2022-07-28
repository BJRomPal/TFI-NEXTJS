import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese un nombre"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese un Correo Electrónico"],
        unique: [true, "Correo Electrónico ya registrado"],
    },
    password: {
        type: String,
        required: [true, "Por favor ingrese una contraseña válida"],
        unique: false,
    },
});

const Usuario = mongoose.models['Usuarios'] || mongoose.model("Usuarios", userSchema);
module.exports = Usuario;