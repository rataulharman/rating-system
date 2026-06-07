import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <div>
      <StarRating />

      <button className="open-button" onClick={openDialog}>
        OPEN DIALOG
      </button>

      {open && <Dialog closeDialog={closeDialog} />}
    </div>
  );
}

export default App;