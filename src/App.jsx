import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./helpers/fetchImages";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }

    setImages([]);
    setLoading(true);
    setError(null);

    try {
      const results = await fetchImages(query);
      if (results.length === 0) {
        toast("No images found for your query.", { icon: "🔍" });
      }
      setImages(results);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="App">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      <ImageModal
        isOpen={!!modalImage}
        onClose={closeModal}
        image={modalImage}
      />
    </div>
  );
}

export default App;
