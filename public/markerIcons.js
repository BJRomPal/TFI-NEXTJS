import L from 'leaflet';

var CustomIcon = L.Icon.extend({
    options: {
        shadowUrl: './iconos/marker-shadow.png',
        iconSize:     [33, 45],
        shadowSize:   [50, 64],
        iconAnchor:   [7, 40],
        shadowAnchor: [4, 62],
    }
});

var iconComisaria = new CustomIcon({iconUrl: './iconos/comisaria.png', iconRetinaUrl: './iconos/comisaria.png'}),
    iconBombero = new CustomIcon({iconUrl: './iconos/bombero.png', iconRetinaUrl: './iconos/bombero.png'}),
    iconEscuela = new CustomIcon({iconUrl: './iconos/escuelas.png', iconRetinaUrl: './iconos/escuelas.png'}),
    iconHospital = new CustomIcon({iconUrl: './iconos/hospitales.png', iconRetinaUrl: './iconos/hospitales.png'}),
    iconCultural = new CustomIcon({iconUrl: './iconos/cultural.png', iconRetinaUrl: './iconos/cultural.png'}),
    iconGastronomia = new CustomIcon({iconUrl: './iconos/gastronomia.png', iconRetinaUrl: './iconos/gastronomia.png'}),
    iconUniversidad = new CustomIcon({iconUrl: './iconos/universidad.png', iconRetinaUrl: './iconos/universidad.png'});



export { iconComisaria, iconBombero, iconEscuela, iconHospital, iconCultural, iconGastronomia, iconUniversidad };