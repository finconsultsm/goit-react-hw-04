import Modal from "react-modal";
import sc from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={sc.modal}
      overlayClassName={sc.overlay}
    >
      <div>
        <img src={urls.regular} alt={alt_description} className={sc.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
