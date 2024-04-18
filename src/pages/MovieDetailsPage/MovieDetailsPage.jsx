import { useEffect, useRef, useState } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { getDetailsMovieById } from "../../services/api";
import Loader from "../../components/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfo = async () => {
      setLoading(true);
      try {
        const movieInfo = await getDetailsMovieById(movieId);
        setMovieDetails(movieInfo);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfo();
  }, [movieId]);

  return (
    movieDetails && (
      <div className={css.filmContainer}>
        <div>{loading && <Loader />}</div>
        <Link to={backLinkRef.current}>🔙Go home</Link>
        <div className={css.filmInfoContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="Film name"
            className={css.filmImg}
            width={320}
          ></img>
          <div>
            <h2 className={css.filmTitle}>{movieDetails.original_title}</h2>
            <p>{`User score: ${Math.round(
              movieDetails.vote_average * 10
            )}%`}</p>
            <h3 className={css.overviewTitle}>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4 className={css.genresTitle}>Genres</h4>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div className={css.addInfoContainer}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetailsPage;
