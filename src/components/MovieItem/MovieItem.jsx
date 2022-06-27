import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Dispatch action with type 'SET_MOVIE'
  // call function in img onClick and set argument to 'movie'
  const setMovieItem = (movie) => {
    dispatch({ type: "SET_MOVIE_ITEM", payload: movie.id });
    console.log("setMovie", movie.id);
    history.push(`details/${movie.id}`);
  };

  return (
    <div className="card">
      <h4>{movie.title}</h4>
      <img
        onClick={() => setMovieItem(movie)}
        src={movie.poster}
        alt={movie.title} // alternative text if image load error
      />
    </div>
  );
}

export default MovieItem;
