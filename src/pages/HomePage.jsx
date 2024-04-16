import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";

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
    <div>
      <h2>Trending today</h2>
      <MovieList filmList={filmList} />
    </div>
  );
};

export default HomePage;
