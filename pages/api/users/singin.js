import dbConnect from '../../../lib/dbConnect'
import Usuario from '../../../models/User'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(request, response) {
  await dbConnect();
  //Buscamos si existe un usuario registrado con el mail del request
  await Usuario.findOne({email: request.body.email}) 
  .then((user) => {
    //Si esta registrado se chequea la contraseña
    bcrypt.compare(request.body.password, user.password)
    .then((passwordCheck) => {
      if(!passwordCheck) {
        return response.status(400).send({
          message: "La contraseña esta incorrecta",
          error,
        });
      }
      //Se crea el token para generar el acceso
      const token = jwt.sign(
        {
          userId: user._id,
          userNombre : user.nombre,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        {expiresIn: "24h"}
      );
        // Se envia respuesta con la creacion del token
        response.status(200).send({
          message: "Login completado",
          nombre: user.nombre,
          email: user.email,
          token,
        });
    })
    // se atrapa el error de que la contraseña sea incorrecta
    .catch((error) => {
      response.status(400).send({
        message: "La contraseña esta incorrecta",
        error,
      });
    });
  })
  // se atrapa el error en el mail proporcionado
  .catch((e) => {
    response.status(400).send({
      message: "Email no encontrado",
      e,
    });
  });
}