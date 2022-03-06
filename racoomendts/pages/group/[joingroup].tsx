import { User } from '../../types/User'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const APIJoinGroup = async ( joingroup: string ) => {
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
  const { joingroup } = router.query;
  const [user, setUser] = useState();

  useEffect(() => {
 
  }, [])

  const { data: session } = useSession()
  console.log(session);
  console.log(user);
  return (
    <>hey</>
  )
};

export default JoinGroup