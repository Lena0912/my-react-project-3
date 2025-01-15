

import ImageCard from "../ImageCard/ImageCard";
import { Gallery, ImageContainer } from "./ImageGallery.styled";

const ImageGallery = ({ items }) => {
  
    return (
      <Gallery>
        {items.map((image) => (
          <ImageContainer key={image.id}>
            <ImageCard image={image} />
          </ImageContainer>
        ))}
      </Gallery>
    );
};

export default ImageGallery;

