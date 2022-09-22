import dbConnect from '../../../lib/dbConnect'
import Aviso from '../../../models/Aviso'


export default async (request, response) => {
    await dbConnect()
    const aviso = await Aviso.findById(request.body.id).populate({path: 'inmueble_id'}).lean()
    response.json(aviso);
  }

 