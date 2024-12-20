import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type ModalProps = React.PropsWithChildren<{
 open: boolean;
}>;

const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #040404;
  border-radius: 20px;
  box-shadow: 0 0.1px 5px #8CC92D;
  &::backdrop {
  background: rgba(0, 0, 0,  0.8); /* Dark background with partial transparency */
}
`

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal = ({ open, children }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open && modal) {
      modal.showModal();
    }

    return () => modal?.close();
  }, [open]);

  return createPortal((
    <StyledDialog ref={dialog} >
      {children}
    </StyledDialog>
  ),modalRoot );
};

export default Modal;
