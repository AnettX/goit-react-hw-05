import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader";

const HomePage = () => {
  const [filmList, setFilmList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const movies = await getTrendingMovies();

        setFilmList(movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {loading && <Loader />}
      <MovieList filmList={filmList} />
    </>
  );
};

export default HomePage;
