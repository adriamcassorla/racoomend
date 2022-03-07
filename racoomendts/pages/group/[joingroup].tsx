import { User } from '../../types/User'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { join } from 'path';

const APIJoinGroup = async ( joingroup: string ) => {
  console.log(joingroup);
  const rawUser = await fetch(`http://localhost:3000/api/group/${joingroup}`)
  return await rawUser.json();
}

// type Data = {
//   user?: User 
//   Error?: string
// }

// type Props = {
//   user: Data
// }

const JoinGroup = () => {
  const router = useRouter();
  console.log(router.query);
  const { joingroup } = router.query;
  console.log('joingroup = ', joingroup)
  const [user, setUser] = useState();

  useEffect(() => {
    APIJoinGroup(joingroup as string);
  }, [])

  return (
    <>hey</>
  )
};

export default JoinGroup