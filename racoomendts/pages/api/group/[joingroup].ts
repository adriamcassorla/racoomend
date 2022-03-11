
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';
import { User } from './../../../types/User'

type Data = {
  user?: User
  Error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    const session = await getSession({ req })
    const { joingroup } = req.query
    if (session && session.user?.email) {
      const email = session.user?.email
      if (req.method === 'GET' && typeof joingroup === 'string') {
        try {

          const user = await prisma.user.update({
            where: { email: email },
            data: {
              groups: {
                connect: { id: joingroup }
              }
            }

          })


          if (user) res.redirect(`/profile/dashboard/${email}`)

        } catch (Error) {
          console.error(Error, "Error while updating group");
          res.json({ Error: 'Data Provided is not correct, provide a category group ID' });
        }
      }
      else res.status(403).json({ Error: '' })

    }
    else res.status(401).redirect("/login")
  } catch (e) {
    res.status(401).json({ Error: 'Not going inside ' })
  }
}