import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Dispatch action with type 'SET_MOVIE'
  const setMovie = (movie) => {};
  return <></>;
}

export default MovieItem;
