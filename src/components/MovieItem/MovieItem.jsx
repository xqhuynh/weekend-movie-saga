import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Dispatch action with type 'SET_MOVIE'
  // call function in img onClick and set argument to 'movie'
  const setMovieItem = (movie) => {
    // add useEffect with params.id argument
    // refresh on details goal
    dispatch({ type: "FETCH_ACTIVE_MOVIE", payload: movie.id });
    console.log("setMovie", movie.id);
    history.push(`details/${movie.id}`);
  };
  // Alternatively, use Link instead of history

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
