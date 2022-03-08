
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
      const { title, oneline, url, authorId, groupId, categories} = req.body
      const recommendation = await prisma.recommendation.create({
        data: {
          title,
          oneline,
          url,
          authorId,
          groupId,
          categories
        },
      }) 
      res.status(200).json({ recommendation })
  
    } catch (e) {
      console.error(e);
      res.json({e});
    }
  }
  else res.status(403).json({ Error: 'Method not accepted'})
}