import {connectToDatabase} from '../../../lib/mongodb'

export const config = {
    api: {
      externalResolver: true,
    },
  }

  export default async (request, response) => {
    const {db} = await connectToDatabase();
    const longitud = request.body.longitud;
    const latitud = request.body.latitud;
    const cultural = await db
      .collection('cultural')
      .find({
        location: {
           $nearSphere: {
              $geometry: {
                 type : "Point",
                 coordinates : [ longitud, latitud ]
              },
              $minDistance: 0,
              $maxDistance: 1500
           }
        }
      })
      .toArray();

      response.json(cultural);
  }