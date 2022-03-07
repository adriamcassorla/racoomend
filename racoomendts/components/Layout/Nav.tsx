import { useContext } from 'react';
import CurrentUserContext from '../../utils/context';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../../styles/Header.module.css'
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

const Nav = () => {
  
  const { currentUser, setUser } = useContext(CurrentUserContext);
  const router = useRouter();
  const { data: session } = useSession()
  
  if (router.asPath === '/' || router.asPath === '/login' ) {

    return (
      <header className={styles.fullbarRoot}>
      <div className={styles.logoContainer}>
        <Link href="/profile/dashboard/2" passHref={true}>
          <div>
            <Image src="/Racoomend.png" alt="Racoomend logo" width={440} height={100} />
          </div>
        </Link>
      </div>
    </header>
    )
  }
  return (

    <header className={styles.fullbar}>
      {session && currentUser? 
        <div className={styles.profileContainer}>
          <Link href={`/profile/${currentUser.email}`} passHref>
            <Image src={session.user?.image ? session.user.image : '/raccoon.png'} alt="User profile image" width={'50px'} height={'50px'} className={styles.profileImg}/>
          </Link>
          <Link href={`/profile/dashboard/${currentUser.email}`} passHref>
            <button className={styles.dashboardBtn}>Dashboard</button>
          </Link>
        </div>
        : null
      }
      <div className={styles.logoContainer}>
        <Link href="/profile/dashboard/2" passHref={true}>
          <div>
            <Image src="/Racoomend.png" alt="Racoomend logo" width={440} height={100} />
          </div>
        </Link>
      </div>

      {session ? 
        <div>
          <button className={styles.signInBtn} onClick={() => signOut()}>Sign Out</button>
        </div>
       : 
        <div>
          <button className={styles.signOutBtn} onClick={() => router.push('/login')}>Sign In</button>
        </div>
      }
    </header>
  )
};

export default Nav;
