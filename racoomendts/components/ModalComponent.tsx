import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css";


const ModalComponent = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <button onClick={open}>Open Dialog</button>

      <Dialog isOpen={showDialog} onDismiss={close} aria-label="New recommendation">
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  );
}

export default ModalComponent