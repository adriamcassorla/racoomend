import { AppProps } from 'next/dist/shared/lib/router/router'
import React from 'react'
import styles from './../../styles/CategorySelector.module.css'

type Props = {
  setCategory: Function
}

const CategorySelector = ({ setCategory }: Props) => {

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.value);
  }

  return (
    <ul className={styles.list}>
      <li ><button className={styles.category} value="MOVIE" onClick={onClick}>Movies</button></li>
      <li ><button className={styles.category} value="BOOK" onClick={onClick}>Books</button></li>
      <li ><button className={styles.category} value="RESTAURANT" onClick={onClick}>Restaurants</button></li>
      <li ><button className={styles.category} value="ARTICLE" onClick={onClick}>Articles</button></li>
    </ul>
  )
}

export default CategorySelector