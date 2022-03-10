import React from "react";
import styles from "./../../styles/CategorySelector.module.css";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategorySelector = ({ setCategory }: Props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.value);
  };

  const categories: { [key: string]: string } = {
    movie: "Movies",
    book: "Books",
    restaurant: "Restaurants",
    article: "Articles",
  };

  return (
    <ul className={styles.list}>
      {Object.keys(categories).map((cat) => (
        <li key={cat}>
          <button
            className={styles.category}
            value={cat.toUpperCase()}
            onClick={onClick}
          >
            {categories[cat]}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelector;
