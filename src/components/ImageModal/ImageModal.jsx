
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "900px",
    height: "auto",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "1000",
  },
};

Modal.setAppElement("#root");

function ImageModal({isOpen, onRequestClose, image}) {
        
        return (
          <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Image Modal"
          >
            {image && (
              <div>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || "Large Image"}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            )}
          </Modal>
        );
    }

  

export default ImageModal;