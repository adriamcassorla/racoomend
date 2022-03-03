import type { GetServerSideProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import prisma from '../lib/prisma'
import { Group } from '../types/Group'

const GroupList = ({ groups }: AppProps) => {
  console.log(groups);
  console.log(groups.users)
  return (
    <ul>
      {groups ? groups.map((group: Group) => {
          return (<li key={group.id}>
              <h1>
              {group.name}
              </h1>
              <p>{group.users}</p>
            </li>)
      }) : null
    }
    </ul>
  )
}

export default GroupList