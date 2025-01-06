import ImageCard from "../ImageCard/ImageCard";
import sc from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <ul className={sc.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => onImageClick(image)}
          className={sc.item}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
