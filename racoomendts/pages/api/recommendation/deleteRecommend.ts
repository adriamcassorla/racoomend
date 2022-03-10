import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Recommendation } from '../../../types/Recommendation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ recommendation: Recommendation } | { e: Error }>
) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body
      const recommendation = await prisma.recommendation.delete({
        where: {
          id
        }
      })

      res.status(200).json({ recommendation })

    } catch (e) {
      res.json({ e: e as Error });
    }
  }
  else res.status(403).json({ e: new Error('Method not accepted') })
}