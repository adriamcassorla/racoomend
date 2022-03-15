import React from "react";
import styles from "./../../styles/CategorySelector.module.css";

import categories from "../../utils/categories";

type PropsType = { setCategory: React.Dispatch<React.SetStateAction<string>> };

const CategorySelector = ({ setCategory }: PropsType) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.value);
  };

  return (
    <ul className={styles.list} id="categoriesList">
      {categories.map((category) => (
        <li key={category}>
          <button
            className={styles.category}
            value={category.slice(0, -1).toUpperCase()}
            onClick={onClick}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelector;
