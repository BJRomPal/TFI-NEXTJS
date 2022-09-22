import mongoose from "mongoose";

const inmuebleSchema = new mongoose.Schema({

    tipo: {
        type: String,
        required: [true, "Se requiere tipo de Inmueble"],
        unique: false,
    },
    casa: {
        type: String
    }, 
    propiedadHorizontal: {
        cantPisos: Number,
        cantUnidades: Number,
        pisoInmueble: Number,
        cantAsensores: Number,
        Expensas: Number
    },
    direccion: {
        calle: {
            type: String,
            required: [true, "Se requiere calle del inmueble"],
            unique: false,
        },
        altura: {
            type: Number,
            required: [true, "Se requiere numero de puerta del inmueble"],
            unique: false, 
        },
        barrio: {
            type: String,
            required: [true, "Se requiere barrio del inmueble"],
            unique: false,
        },
        position: {
            type: {type: String, default: "Point"},
            coordinates: {type: Array},
        }
    },
    antiguedad: {
        type: Number,
        required: [true, "Se requiere antiguedad del Inmueble"],
        unique: false,
    },
    supTotal: {
        type: Number,
        required: [true, "Se requiere superficie total del Inmueble"],
        unique: false,
    },
    supCubierta: {
        type: Number,
        required: [true, "Se requiere superficie cubierta del Inmueble"],
        unique: false,
    },
    cantAmbientes: {
        type: Number,
        required: [true, "Se requiere cantidad de ambientes del Inmueble"],
        unique: false,
    },
    ambientes: [{
        medidas: String,
        tipo: String
    }],
    dormitorios: {
            type: Number,
            required: [true, "Se requiere cantidad de dormitorios del Inmueble"],
            unique: false,
    },
    banos: {
        type: Number,
        required: [true, "Se requiere cantidad de ba;os del Inmueble"],
        unique: false,
    },
    cochera: {
        type: Boolean,
        required: [true, "Se requiere saber si tiene cocheras"],
        unique: false,
    },
    tipoCochera: {
        cantidad: {type: Number, default: 0},
        tipo: {type: String, default: "Sin Cochera"},     
    },
    titulo: {
        type: String,
        required: [true, "Se requiere un titulo para la publicaci[on"],
        unique: false,
        maxlength: 50
    },
    descripcion: {
        type: String,
        required: [true, "Se requiere una descripcion para la publicaci[on"],
        unique: false
    },
    fotos: [{
        url: {type: String},
        descripcion: {
            type: String,
            maxlength: 50
        }
    }],
    fotoPrincipal: {
        type: String
    },
    ameneties: [String]
});

export default mongoose.models.Inmueble || mongoose.model("Inmueble", inmuebleSchema);
