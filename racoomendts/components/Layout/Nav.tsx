import { useContext } from 'react';
import CurrentUserContext from '../../utils/context';

import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './../../styles/Header.module.css';

const Nav = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const router = useRouter();

  const { data: session } = useSession();

  if (router.asPath === '/' || router.asPath === '/login') {
    return (
      <header className={styles.fullbarRoot}>
        <div className={styles.logoContainer}>
          <Image
            src="/Racoomend.png"
            alt="Racoomend logo"
            width={440}
            height={100}
          />
        </div>
      </header>
    );
  }

  return (
    <header className={styles.fullbar}>
      {session && currentUser ? (
        <div className={styles.profileContainer}>
          <Link href={`/profile/${currentUser.email}`} passHref>
            <a>
              <Image
                src={session.user?.image ? session.user.image : '/raccoon.png'}
                alt="User profile image"
                width={'50px'}
                height={'50px'}
                className={styles.profileImg}
              />
            </a>
          </Link>
          <Link href={`/profile/dashboard/${currentUser.email}`} passHref>
            <button className={styles.dashboardBtn}>Dashboard</button>
          </Link>
        </div>
      ) : null}
      <div className={styles.logoContainer}>
        <div>
          <Image
            src="/Racoomend.png"
            alt="Racoomend logo"
            width={440}
            height={100}
          />
        </div>
      </div>

      {session ? (
        <div>
          <button className={styles.signInBtn} onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button
            className={styles.signOutBtn}
            onClick={() => router.push('/login')}
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
