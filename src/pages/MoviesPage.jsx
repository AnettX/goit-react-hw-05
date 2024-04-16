import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getSearchMovie } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      setLoading(true);
      try {
        const movies = await getSearchMovie(query);
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieList filmList={movies} />
    </div>
  );
};

export default MoviesPage;
