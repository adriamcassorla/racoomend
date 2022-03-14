import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Racoomend</title>
        <meta name="description" content="Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.heroContainer}>
          <h3 className={styles.subTitle}>
            Spending more time choosing a netflix movie than watching it?
          </h3>
          <h1 className={styles.mainTitle}>
            Trust your friends, they know you better.
          </h1>
          <Link href="/login" passHref>
            <div>
              <button className={styles.CTA}>Start Racoomending</button>
            </div>
          </Link>
        </div>
        <div className={styles.racImg}>
          <Image
            src="/Landing_Raccoon.png"
            width={500}
            height={400}
            alt="Celebrating raccoon"
          />
        </div>
        <div className={styles.racImgLeft}>
          <Image
            src="/Landing_Raccoon.png"
            width={500}
            height={400}
            alt="Celebrating raccoon"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
