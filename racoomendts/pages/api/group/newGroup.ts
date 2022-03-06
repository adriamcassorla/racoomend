import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Data = {
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ( req.method === 'POST') {
    try {
      console.log(req.body);
      const { name, userId } = req.body
      const group = await prisma.group.create({
        data: {
          name,
          users: {
            connect: { id: userId }
          }
        },
      }) 
     
      res.status(200).json({ group })
  
    } catch (e) {
      console.error(e);
      res.json({e});
    }
  }
  else res.status(403).json({ Error: 'Method not accepted'})
}