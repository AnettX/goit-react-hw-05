import { Link } from "react-router-dom";


const MovieList = ({ filmList }) => {
  return (
    <div>
      <ul>
        {Array.isArray(filmList) &&
          filmList.map((filmItem) => {
            return (
              <li key={filmItem.id}>
                <Link to={`/movies/${filmItem.id}`}>
                  {filmItem.original_title || filmItem.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList
