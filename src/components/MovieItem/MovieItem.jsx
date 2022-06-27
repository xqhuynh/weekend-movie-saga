import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Dispatch action with type 'SET_MOVIE'
  const setMovie = (movie) =>
    dispatch({
      type: "SET_MOVIE_ITEM",
      payload: movie.id,
    });
  console.log("Movie id is", movie.id);
  history.push(`details/${movie.id}`);

  return (
    <>
      <div>
        <h4>{movie.title}</h4>
        <img onClick={() => setMovie(movie)} src={movie.poster} />
      </div>
    </>
  );
}

export default MovieItem;
