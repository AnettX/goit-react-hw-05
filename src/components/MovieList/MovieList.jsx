import { Link, useLocation } from "react-router-dom";

const MovieList = ({ filmList }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {Array.isArray(filmList) &&
          filmList.map((filmItem) => {
            return (
              <li key={filmItem.id}>
                <Link state={location} to={`/movies/${filmItem.id}`}>
                  {filmItem.original_title || filmItem.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
