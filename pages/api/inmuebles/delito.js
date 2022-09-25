import dbConnect from '../../../lib/dbConnect'
import Delito from '../../../models/Delitos'


export default async (request, response) => {
    await dbConnect()
    const delitos = await Delito.find({});
    response.json(delitos);
  }

 