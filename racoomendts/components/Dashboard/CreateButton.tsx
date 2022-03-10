import styles from "./../../styles/textButton.module.css";

type Props = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

const CreateButton = ({ setDialog, text }: Props) => {
  const handleClick = () => {
    setDialog((prevDialog: boolean) => !prevDialog);
  };

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={handleClick}>
        <h3>{text}</h3>
      </button>
    </div>
  );
};

export default CreateButton;
