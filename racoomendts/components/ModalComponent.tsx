import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Add from "../pages/add";
import AddGroup from "../pages/group/addGroup";

import Props from "../types/ModalProps";

const ModalComponent = ({
  category,
  showDialog,
  setDialog,
  currentGroup,
}: Props) => {
  const close = () => setDialog(false);
  if (category === "Group") {
    return (
      <div>
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-label="New Group"
          style={{
            width: "fit-content",
            height: "0",
            background: "transparent",
          }}
        >
          <AddGroup setDialog={setDialog} />
        </Dialog>
      </div>
    );
  }

  if (currentGroup) {
    return (
      <div>
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-label="New recommendation"
          style={{
            width: "fit-content",
            height: "0",
            background: "transparent",
          }}
        >
          <Add currentGroup={currentGroup} setDialog={setDialog} />
        </Dialog>
      </div>
    );
  }
  return <></>;
};

export default ModalComponent;
