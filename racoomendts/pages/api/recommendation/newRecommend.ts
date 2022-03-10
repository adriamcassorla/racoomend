
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Recommendation } from '../../../types/Recommendation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ recommendation: Recommendation } | { e: Error }>
) {
  if (req.method === 'POST') {
    try {
      const { title, oneline, url, authorId, groupId, categories } = req.body
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
      res.json({ e: e as Error });
    }
  }
  else res.status(403).json({ e: new Error('Method not accepted') })
}