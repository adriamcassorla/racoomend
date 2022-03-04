// Functionality, types and db
import type { GetServerSideProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Group } from '../../types/Group'
import prisma from '../../lib/prisma'

// Components
import Head from 'next/head'
import GroupComponent from './GroupComponent';

type Props = {
  groups: Group[];
  currentGroup: string;
  setGroup: Function;
}

const GroupList = ({ groups, currentGroup, setGroup }: Props) => {
  return (
    <ul>
      {groups ? groups.map((group: Group) => {
          return (
          <li key={group.id}>
            <GroupComponent setGroup={setGroup} group={group} currentGroup={currentGroup}/>  
          </li>
            )
      }) : null
    }
    </ul>
  )
}

export default GroupList