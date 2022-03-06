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
  console.log(session);
  const email = 'nicolopez413@gmail.com'
  const { joingroup } = req.query 
  console.log(req.method);
  console.log(typeof joingroup);
  if (session) {
    if ( req.method === 'GET' && typeof joingroup === 'string') {
      console.log('from within')
      try {

        const user = await prisma.user.update({
          where: { email },
          data: {
            groups: {
              connect: { id: joingroup}
            }
          }

          })
        
        
        if ( user ) res.status(200).json({ user })
        
      } catch (Error) {
        console.error(Error, "Error while updating group");
        res.json({Error: 'Data Provided is not correct, provide a category group ID'});
      }
    }
    else res.status(403).json({ Error: 'Method not accepted'})
     
  }
  else res.status(403).json({ Error: 'You must be sign in to view this content'})
}