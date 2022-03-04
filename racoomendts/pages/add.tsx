import { useState } from "react";
import styles from "../styles/Add.module.css"
import { AppProps } from "next/dist/shared/lib/router/router";
import prisma from "../lib/prisma";

import Head from "next/head";
import Image from "next/image";

const Add = (props: AppProps) => {

  const [title, setTitle] = useState('');
  const [oneline, setOneline] = useState('');
  const [url, setUrl] = useState('');
  const [categories, setCategories] = useState('ARTICLE');

  const addRecommendation = () => {
    
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
        <input className={styles.formInput} id="title" name="title" type="text" placeholder="Title your recommendation" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <label htmlFor='oneline'>Oneline</label>
        <input className={styles.formInput} id='oneline' name='oneline' type="text" placeholder="Short description of your recommendation" value={oneline} onChange={(e) => setOneline(e.target.value)} required/>
        <label htmlFor='url'>URL</label>
        <input className={styles.formInput} id='url' name='url' type="text" placeholder="Provide a url with more relevant info" value={url} onChange={(e) => setUrl(e.target.value)}/>
        <label htmlFor="categories">Choose a category</label>
        <select id="categories"name="gender" value={categories} onChange={(e) => setCategories(e.target.value)} required>
          <option value="ARTICLE">Article</option>
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