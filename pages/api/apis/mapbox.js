import {connectToDatabase} from '../../../lib/mongodb'
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  var oId = new ObjectId(req.body.id);

  const apis = await db
    .collection("api")
    .findOne({_id : oId}, {_id: 0})

  res.json(apis);
}