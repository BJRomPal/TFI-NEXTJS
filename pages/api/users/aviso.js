import dbConnect from '../../../lib/dbConnect';
import Aviso from '../../../models/Aviso';
import Inmueble from '../../../models/Inmueble';
import axios from 'axios';


const ENDPOINT = 'https://nominatim.openstreetmap.org/search?q=';
let patronRegex = new RegExp('^[0-9]', 'g');

export const config = {
    api: {
      externalResolver: true,
    },
  }
  
export default async function handler(request, response) {
    await dbConnect();
    const urlString = `${ENDPOINT}${request.body.direccion.altura}+${request.body.direccion.calle}+Ciudad+de+Buenos+Aires&format=json`;
    await axios.get(urlString)
    .then((res) => {
        var numero = patronRegex.test(res.data[0]['display_name'])
        if (numero) {
            const ubicacion = res.data[0]['display_name'];
            const array = ubicacion.split(",")
            const inmueble = new Inmueble({
                tipo: request.body.tipo,
                casa: request.body.casa,
                direccion: {
                    calle: request.body.direccion.calle,
                    altura: request.body.direccion.altura,
                    barrio: array[2].trim(),
                    position: {
                        type: "Point",
                        coordinates: [res.data[0]["lon"], res.data[0]["lat"]]
                    }
                },
                antiguedad: request.body.antiguedad,
                supTotal: request.body.supTotal,
                supCubierta: request.body.supCubierta,
                cantAmbientes: request.body.cantAmbientes,
                ambientes: request.body.ambientes,
                dormitorios: request.body.dormitorios,
                banos: request.body.banos,
                cochera: request.body.cochera,
                tipoCochera: request.body.tipoCochera,
                titulo: request.body.titulo,
                descripcion: request.body.descripcion,
                fotos: request.body.fotos,
                fotoPrincipal: request.body.fotoPrincipal,
                ameneties: request.body.ameneties
            });
            inmueble.save(); //funcion de moongose que graba el usuario como documento en la db
            const aviso = new Aviso({
                inmueble_id: inmueble.id,
                usuario_id: request.body.usuario_id,
                fechaPublicacion: Date.now(),
                plazo: new Date(Date.now() + 90*24*60*60*1000),
                precioAviso: 700,
                operacion: request.body.operacion,
                monedaOperacion: request.body.monedaOperacion,
                montoOperacion: request.body.montoOperacion,
                nombreAnunciante: request.body.nombreAnunciante,
                mailContacto: request.body.mailContacto,
                destacado: false
            })
            aviso.save()
            .then((result) => {
                response.status(201).send({
                message: "Aviso creado",
                result,
          });
          })}
          else {
            response.send({
                message: "Error en la altura"
            })
          }
        }
        )   
    .catch((e) => {
        // toma el error de que la contraseña no haya podido ser hasheada
        response.status(500).send({
            message: "Error en la direccion proporcionada",
            e,
        });
      });
  }
    