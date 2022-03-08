
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { User } from './../../types/User';

type Data = {
  user?: User[];
  e?: unknown;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    if ( req.method === 'GET') {
      try {
        const user = await prisma.user.findMany({}) 
        if (!user) {
          res.status(404).json({});
        } else {
          res.status(200).json({user})
        }
      } catch (e) {
      console.error(e);
      res.json({e});
    }
    }
  } catch (e) {
    console.error(e);
    res.json({e: {"Failed": "Failure"}})
  }
}
