import {connectToDatabase} from '../../../lib/mongodb'

export const config = {
    api: {
      externalResolver: true,
    },
  }

  export default async (request, response) => {
    const {db} = await connectToDatabase();
    const delitos = await db
      .collection('delitos')
      .find({})
      .toArray();
      response.json(delitos);
  }