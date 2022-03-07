// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

  const session = await getSession({ req })
  const { joingroup } = req.query 
  if (session && session.user?.email) {
    const email = session.user?.email
    if ( req.method === 'GET' && typeof joingroup === 'string') {
      try {

        const user = await prisma.user.update({
          where: { email: email },
          data: {
            groups: {
              connect: { id: joingroup}
            }
          }

          })
        
        
        if ( user ) res.redirect(`/profile/dashboard/${email}`)

      } catch (Error) {
        console.error(Error, "Error while updating group");
        res.json({Error: 'Data Provided is not correct, provide a category group ID'});
      }
    }
    else res.status(403).json({ Error: 'Method not accepted'})
     
  }
  else res.status(403).redirect('/login')
}