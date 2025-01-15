
import { useState } from "react";
import { fetchImagesWithTopic } from "../images-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { FallingLines } from "react-loader-spinner";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { Layout } from "./Layout";


 

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState([]);
  const [page, setPage] = useState(1);


  const handleSearchSubmit = async (newTopic) => {
    setLoading(true);
    setError(false);
     setTopic(newTopic);
     setPage(1);
    try {
      const data = await fetchImagesWithTopic(newTopic, 1);
      setImages(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleLoadMore = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchImagesWithTopic(topic, page + 1);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SearchBar onSubmit={handleSearchSubmit} />

      {loading && (
        <FallingLines
          color="#c77d29"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      
    </Layout>
  );
};

export default App;
