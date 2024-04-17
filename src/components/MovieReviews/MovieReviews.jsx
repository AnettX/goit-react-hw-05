import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovieReviews } from "../../services/api";
import Loader from "../Loader";
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfoReviews = async () => {
      setLoading(true);
      try {
        const movieInfoReviews = await getDetailsMovieReviews(movieId);
        setMovieReviews(movieInfoReviews.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfoReviews();
  }, [movieId]);

  return (
    <div>
      <div>{loading && <Loader />}</div>
      <ul>
        <>
          {Array.isArray(movieReviews) && movieReviews.length > 0 ? (
            movieReviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}.</p>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <li className={css.reviewsNotFindItem}>
              We don&apos;t have any reviews for this movie.
            </li>
          )}
        </>
      </ul>
    </div>
  );
};

export default MovieReviews;
