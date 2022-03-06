import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css";

type Props = {
  category: string,
  showDialog: boolean,
  // Proper way of typing. Using Function for this same things esta feo.
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalComponent = ( {category, showDialog, setDialog}: Props ) => {
  const open = () => setDialog(true);
  const close = () => setDialog(false);
  if (category === 'group') {
    return (
      <div>
        <Dialog isOpen={showDialog} onDismiss={close} aria-label="New recommendation">
          <button className="close-button" onClick={close}>
            <span aria-hidden>×</span>
          </button>
          <p>Hello there. I am a dialog for adding groups</p>
        </Dialog>
      </div>
    );
  }
  return (
    <div>

      <Dialog isOpen={showDialog} onDismiss={close} aria-label="New recommendation">
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog for adding recommendations</p>
      </Dialog>
    </div>
  );
}

export default ModalComponent