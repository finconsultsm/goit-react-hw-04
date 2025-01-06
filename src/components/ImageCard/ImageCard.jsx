import sc from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;
  return (
    <div className={sc.card}>
      <img src={urls.small} alt={alt_description} className={sc.image} />
    </div>
  );
};

export default ImageCard;
