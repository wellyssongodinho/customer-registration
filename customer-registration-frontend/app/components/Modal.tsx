interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
  onClose?: (event: any) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children, onClose }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} onClick={onClose}>
      <div className='modal-box relative'>
        <label
          onClick={() => setModalOpen(false)}
          className='btn btn-sm btn-circle absolute right-2 top-2'
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
