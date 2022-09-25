import {connectToDatabase} from '../../../lib/mongodb'

export const config = {
    api: {
      externalResolver: true,
    },
  }

  export default async (request, response) => {
    const {db} = await dbConnect();
    const delitos = await db
      .collection('delitos')
      .find({})
      .toArray();

      response.json(delitos);
  }