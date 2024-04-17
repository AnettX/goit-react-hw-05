import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovieCast } from "../../services/api";
import Loader from "../Loader";
import css from "./MovieCast.module.css";

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
      <div>{loading && <Loader />}</div>
      <ul className={css.castList}>
        {Array.isArray(movieCast) &&
          movieCast.map((cast) => {
            return (
              <li key={cast.id} className={css.castItem}>
                {cast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.original_name}
                    className={css.imgCast}
                  />
                ) : (
                  <div className={css.notImgCast}>
                    {cast.original_name}
                    <p>Фото відсутнє</p>
                  </div>
                )}

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
