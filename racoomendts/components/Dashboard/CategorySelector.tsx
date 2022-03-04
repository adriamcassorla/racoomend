import { AppProps } from 'next/dist/shared/lib/router/router'
import { Group } from '../../types/Group'

const CategorySelector = ({ groups }: AppProps) => {
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

export default CategorySelector