import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css";
import styles from './../styles/ModalComponent.module.css'
import Add from "../pages/add";
import AddGroup from "../pages/group/addGroup";

type Props = {
  category: string,
  showDialog: boolean,
  // Proper way of typing. Using Function for this same things esta feo.
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalComponent = ( {category, showDialog, setDialog}: Props ) => {
  const open = () => setDialog(true);
  const close = () => setDialog(false);
  if (category === 'Group') {
    return (
      <div>
        <Dialog isOpen={showDialog} onDismiss={close} aria-label="New Group" className={styles.dialog}>
          <AddGroup />
        </Dialog>
      </div>
    );
  }
  return (
    <div>

      <Dialog isOpen={showDialog} onDismiss={close} aria-label="New recommendation">
        <Add />
      </Dialog>
    </div>
  );
}

export default ModalComponent