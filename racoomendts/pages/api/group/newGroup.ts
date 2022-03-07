import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Data = {
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, userId, userEmail} = req.body
  if ( req.method === 'POST') {
    try {
      const group = await prisma.group.create({
        data: {
          name,
          users: {
            connect: { id: userId }
          }
        },
      }) 
      res.status(201).redirect(`/profile/dashboard/${userEmail}`)
  
    } catch (e) {
      console.error(e);
      res.status(403).redirect(`/profile/dashboard/${userEmail}`)
    }
  }
  else res.status(403).redirect(`/profile/dashboard/${userEmail}`)
}