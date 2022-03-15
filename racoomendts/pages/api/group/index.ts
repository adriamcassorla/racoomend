import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Group } from '../../../types/Group';

import nc from "next-connect";
import cors from 'cors'

const deleteGroup = async (
  req: NextApiRequest,
  res: NextApiResponse<{ group: Group } | { e: Error }>
) => {
  try {
    const { id } = req.body
    const group = await prisma.group.delete({
      where: {
        id
      }
    })
    res.status(200).json({ group })

  } catch (e) {
    res.json({ e: e as Error });
  }
}

const addNewGroup = async (
  req: NextApiRequest,
  res: NextApiResponse<Group>
) => {
  const { name, userId, userEmail } = req.body
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
    res.status(403).redirect(`/profile/dashboard/${userEmail}`)
    //console.error(e);
  }
}


const handler = nc()
  .use(cors())
  .post(addNewGroup)
  .delete(deleteGroup);

export default handler;