import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./button";

export default function Modal({ children, ref, buttonText }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {
    dialog.current.close();
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/80 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button text={buttonText} onClick={handleClose} />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
