import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../styles/RecommendationList.module.css';

const Nav = () => {
  return (
    <header className={styles.fullbar}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref={true}>
          <>
          <Image src="/Racoomend.png" alt="Racoomend logo" width={440} height={100} />
          </>
        </Link>
      </div>

      <Link href="/add" passHref>
        <button className={styles.addButton}>Add Recommendation</button>
      </Link>
    </header>
  )
};

export default Nav;
