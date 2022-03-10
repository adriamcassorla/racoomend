import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Group } from '../../../types/Group';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Group>
) {
  const { name, userId, userEmail } = req.body
  if (req.method === 'POST') {
    try {
      const group = await prisma.group.create({
        data: {
          name,
          users: {
            connect: { id: userId }
          }
        },
      })
      res.status(201).json(group);

    } catch (e) {
      console.error(e);
      res.status(403).redirect(`/profile/dashboard/${userEmail}`)
    }
  }
  else res.status(403).redirect(`/profile/dashboard/${userEmail}`)
}