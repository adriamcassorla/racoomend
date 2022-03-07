import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Data = {
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ( req.method === 'DELETE') {
    try {
      const { id } = req.body
      const recommendation = await prisma.recommendation.delete({
        where: {
          id
        }
      }) 
     
      res.status(200).json({ recommendation })
  
    } catch (e) {
      console.error(e);
      res.json({e});
    }
  }
  else res.status(403).json({ Error: 'Method not accepted'})
}