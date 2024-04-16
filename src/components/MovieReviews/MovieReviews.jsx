import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  return (
    <div>
      useParams
      <p>Additional information</p>
      <ul>
        <li>Reviews</li>
      </ul>
    </div>
  );
};

export default MovieReviews;
