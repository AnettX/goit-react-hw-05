import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieCast, setMovieCast] = useState();

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfoCast = async () => {
      setLoading(true);
      try {
        const movieInfoCast = await getDetailsMovieCast(movieId);
        setMovieCast(movieInfoCast.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfoCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {Array.isArray(movieCast) &&
          movieCast.map((cast) => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.original_name}
                  width={150}
                />
                <p>{cast.original_name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
