
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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