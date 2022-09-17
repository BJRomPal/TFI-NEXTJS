const inmueblePrueba = {
    _id: 1,
    tipo: "departamento",
    propiedadHorizontal: {
        cantPisos: 16,
        cantUnidades: 76,
        pisoInmueble: 8,
        cantAsensores: 2,
        Expensas: 20000
    },
    direccion: {
                    calle: "Baez",
                    altura: 600
                },
    antiguedad: 14,
    supTotal: 82,
    supCubierta: 64,
    cantAmbientes: 3,
    ambientes: [{
        medidas: "4x3",
        tipo: "Dormitorio1"
    },
    {
        medidas: "3x3",
        tipo: "Dormitorio2"
    },{
        medidas: "6x3",
        tipo: "Living"
    }
    ],
    dormitorios: 2,
    banos: 2,
    cochera: true,
    tipoCochera: {
        cantidad: 1,
        tipo: "descubierta",     
    },
    titulo: "Espectacular 3 ambientes con cochera",
    descripcion: "Amplio tres ambientes ubicado en las cañitas. Edificio de 14 años con amplio véstibulo y jardín. La unidad cuenta con dos dormitorios, el principal en suite y con vestidor. Amplio living-comedor con buena iluminación todo el día. La cocina está integrada al comedor y cuenta con lavadero separado. El balcón es amplio y tiene vista a la calle.",
    fotos: [{
        url: "/imagenes/inmuebles/vestibulo.jpg",
        descripcion: "Vestibulo del edificio"
        },{
            url: "/imagenes/inmuebles/cocinaComedorLiving.jpg",
            descripcion: "Living Comedor con cocina integrada"
        },
        {
            url: "/imagenes/inmuebles/lavadero.jpg",
            descripcion: "Lavadero separado del inmueble"
        },{
            url: "/imagenes/inmuebles/vistaBalcon.jpg",
            descripcion: "Vista del Balcon hacia la calle"
        },
        {
            url: "/imagenes/inmuebles/dormitorioSuite1.jpg",
            descripcion: "Amplio dormitorio en Suite con vestidor"
        },
        {
            url: "/imagenes/inmuebles/vestidor1.jpg",
            descripcion: "Vestidor del dormitorio en Suite"
        },
        {
            url: "/imagenes/inmuebles/banoSuite.jpg",
            descripcion: "Baño del Dormitorio en Suite"
        },
        {
            url: "/imagenes/inmuebles/dormitorio2.jpg",
            descripcion: "Segundo dormitorio del inmueble"
        },
        {
            url: "/imagenes/inmuebles/bano2.jpg",
            descripcion: "Segundo baño del inmueble"
        },
        {
            url: "/imagenes/inmuebles/cochera.jpg",
            descripcion: "Sector de cocheras descubiertas del edificio"
        }],
    ameneties: ["gimanasio", "Solarium", "Parrilla"],
    usuario_id: "62c74af6982fe02f1c846133",
    operacion: "venta",
    monedaOperacion: "U$S",
    montoOperacion: 190000
}


export default inmueblePrueba;