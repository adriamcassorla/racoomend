// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Recommendation } from '../../../types/Recommendation';
import { User } from '../../../types/User'
import { useRouter } from "next/router";

type Data = {
  recommendation?: Recommendation[],
  Error?: unknown,
  // title: string,
  // oneline: string,
  // url: string,
  // image?: string,
  // authorId: string,
  // category: string,
  // author: User,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ( req.method === 'GET') {

    try {
      console.log(req.query);
      res.status(200).json({})
      
    } catch (Error) {
      console.error(Error, "Error while fetching recommendations");
      res.json({Error: 'Data Provided is not correct, provide a category a groupID and a userID'});
    }
  }
  else res.status(403).json({ Error: 'Method not accepted'})
}