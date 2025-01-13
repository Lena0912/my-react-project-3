import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const ImageCard = ({ image  }) => {
    const { urls, alt_description } = image;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    return (
      <div>
            <img
                src={urls.small}
                alt={alt_description || "Image"}
                onClick={openModal}
                style={{cursor: "pointer"}}
            />
            <ImageModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                image={image}
            />
      </div>
    );
};

export default ImageCard;

