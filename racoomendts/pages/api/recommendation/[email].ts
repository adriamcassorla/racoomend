// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { Recommendation } from '../../../types/Recommendation';
import { getSession } from 'next-auth/react';
import { User } from '../../../types/User';
import { Group } from '../../../types/Group';

type Data = {
  user?: User
  recommendations?: Recommendation[],
  groups?: Group[],
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

  const session = await getSession({ req })
  const { email } = req.query

  // if (session) {
    if ( req.method === 'GET' && typeof email === 'string') {
      
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: email
          }
        })
        const groups = await prisma.group.findMany({
          where: {
            users: {
              some: {
                id: user?.id
              }
            } 
          }
        })
        const groupIds = groups.map(group => group.id);
        const recommendations = [];
        for (let id of groupIds) {
          const groupRecommendations = await prisma.recommendation.findMany({
            where: {
              groupId: id
            }
          })
          recommendations.push(...groupRecommendations);
        }
        if ( user && recommendations && groups) res.status(200).json({ user, recommendations, groups})
        
      } catch (Error) {
        console.error(Error, "Error while fetching recommendations");
        res.json({Error: 'Data Provided is not correct, provide a category a groupID and a userID'});
      }
    }
    else res.status(403).json({ Error: 'Method not accepted'})
     
  // }
  // else res.status(403).json({ Error: 'You must be sign in to view this content'})
}