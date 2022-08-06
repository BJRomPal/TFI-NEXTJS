import dbConnect from '../../../lib/dbConnect';
import auth from '../../../helpers/auth';



export default async function handler(request, response) {
    dbConnect();
    auth()
    .then(response.json({message: 'estas autorizado para usarme'}))
}