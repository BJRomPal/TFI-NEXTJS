import dbConnect from '../../../lib/dbConnect'
import Usuario from '../../../models/User'
import bcrypt from "bcrypt";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(request, response) {
  dbConnect();
  bcrypt.hash(request.body.password, 10)
      .then((hashedPassword) => {
      // crea el usuario usando el constructor de usuario del UserModel
      const user = new Usuario ({
          nombre: request.body.nombre,
          email: request.body.email,
          password: hashedPassword,
      });
      user
          .save() //funcion de moongose que graba el usuario como documento en la db
          .then((result) => {
          response.status(201).send({
              message: "Usuario creado",
              result,
          });
          })
          .catch((error) => {
          response.status(500).send({
              //Especifica si por algun error el usuario no ha podido ser creado. Dada las validaciones hechas
              //en el singUp form la unica posibilidad es que no se haya creado porque el email ya esta registrado  
              message: "El usuario no ha podido ser creado. Email ya registrado",
              error,
          });
          });
      })
      .catch((e) => {
      // toma el error de que la contraseña no haya podido ser hasheada
      response.status(500).send({
          message: "La contraseña no fue hasheada correctamente",
          e,
      });
    });
}




