
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { User } from './../../types/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user: User } | { e: Error }>
) {
  if (req.method === 'GET') {
    try {
      const id = req.query.dynam as string;
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        res.status(404).json({ e: new Error('No user found') })
      } else {
        res.status(200).json({ user })
      }
    } catch (e) {
      console.error(e);
      res.json({ e: e as Error });
    }
  }
}
