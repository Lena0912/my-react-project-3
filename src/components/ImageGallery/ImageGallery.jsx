
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {items.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    );

};

export default ImageGallery;

