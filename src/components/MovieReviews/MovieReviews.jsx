import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovieReviews } from "../../services/api";

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
      <ul>
        {Array.isArray(movieReviews) &&
          movieReviews.map((review) => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}.</p>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieReviews;
