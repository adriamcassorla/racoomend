import styles from "../styles/Login.module.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";

const Login = ({}: AppProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push(`/profile/dashboard/${session.user?.email}`);
  }

  //TODO: Render a loader while is logging in.

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="Login" content="Log in to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <h3>Sign In</h3>
      <div>
        <button onClick={() => signIn("google")}>
          <Image
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Icon"
            width={40}
            height={40}
          />
        </button>
        <button onClick={() => signIn("github")}>
          <Image
            src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            alt="GitHub Icon"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default Login;
