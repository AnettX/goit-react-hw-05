import { useParams, Outlet, NavLink } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log("getMovies: ", movieId);
  return (
    <div>
      <div></div>
      <div>
        <p>Add info</p>
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
  );
};

export default MovieDetailsPage;
