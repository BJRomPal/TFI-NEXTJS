import mongoose from "mongoose";

const delitoSchema = new mongoose.Schema({
    barrio: {
        type: String,
        required: true,
        unique: true,
    },
    homicidios: {
        type: Number,
        required: true,
    },
    hurtos: {
        type: Number,
        required: true,
    },
    hurtos_automotor: {
        type: Number,
        required: true,
    }

})

const Delito = mongoose.models['Delito'] || mongoose.model("Delito", delitoSchema);
module.exports = Delito;