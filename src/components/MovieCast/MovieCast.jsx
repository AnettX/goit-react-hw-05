import { useParams } from "react-router-dom";

const MovieCast = () => {
   const { movieId } = useParams();
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>Cast</li>
      </ul>
    </div>
  );
};

export default MovieCast;
