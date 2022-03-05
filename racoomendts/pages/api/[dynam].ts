// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error';
import prisma from '../../lib/prisma';
import { User } from './../../types/User';

type Data = {
  user?: User;
  e?: unknown; 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if ( req.method === 'GET') {
    try {
      const id = req.query.dynam as string;
        const user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
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
