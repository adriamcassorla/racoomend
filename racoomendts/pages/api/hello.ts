// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { User } from './../../types/User';

type Data = {
  user?: User;
  e?: unknown;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ( req.method === 'POST') {
    try {
      const { id } = req.body
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      }) 
      if (!user) {
        res.status(404).json({});
      } else {
        res.status(200).json({ user: user })
      }
    } catch (e) {
      console.error(e);
      res.json({e});
    }
  }
}
