import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Add.module.css"

const Add = (props: AppProps) => {

  const addRecommendation = () => {
    return
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="Login" content="Log in to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <form onSubmit={addRecommendation} className={styles.addForm}>
        <label htmlFor="title">Title</label>
        <input className={styles.formInput} id="title" name="title" type="text" placeholder="Title your recommendation" required/>
        <label htmlFor='oneline'>Oneline</label>
        <input className={styles.formInput} id='oneline' name='oneline' type="text" placeholder="Short description of your recommendation" required/>
        <label htmlFor='url'>URL</label>
        <input className={styles.formInput} id='url' name='url' type="text" placeholder="Provide a url with more relevant info" />
        <label htmlFor="categories">Choose a category</label>
        <select id="categories"name="gender" required>
          <option value="ARTICLE" selected>Article</option>
          <option value="MOVIE">Movie</option>
          <option value="BOOK">Book</option>
          <option value="RESTAURANT">Restaurant</option>
        </select>
        <button type='submit' className={styles.addButton}>Create Recommendation</button>
      </form>
    </div>
  )
}

export default Add;