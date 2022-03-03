// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
      const { title, oneline, url, authorId} = req.body
      const recommendation = await prisma.recommendation.create({
        data: {
          title,
          oneline,
          url,
          authorId,
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