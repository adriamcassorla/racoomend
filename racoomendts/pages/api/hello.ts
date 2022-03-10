
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { User } from './../../types/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user: User[] } | { e: Error | {} }>
) {
  try {

    if (req.method === 'GET') {
      try {
        const user = await prisma.user.findMany({})
        if (!user) {
          res.status(40).json({ e: new Error('No user found') })
        } else {
          res.status(200).json({ user })
        }
      } catch (e) {
        console.error(e);
        res.json({ e: e as Error });
      }
    }
  } catch (e) {
    console.error(e);
    res.json({ e: { "Failed": "Failure" } })
  }
}
