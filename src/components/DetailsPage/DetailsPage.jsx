import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

function DetailsPage() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();
  // params is id at path /details/:id
  let { id } = useParams();

  // useEffect to dispatch movie genre
  useEffect(() => {
    dispatch({
      type: "FETCH_MOVIE_GENRES",
      payload: id,
    });
  }, []);

  // Function for movie id logic
  // Loop through movies array and set 'movie' to 'detail' empty object
  // if movie.id matches id
  let details = {};
  const movieDetail = () => {
    for (let movie of movies) {
      if (movie.id === Number(id)) {
        details = movie;
      }
    }
  };

  movieDetail();

  return (
    <>
      <div>
        <div>
          <h4>MOVIE DETAILS</h4>
          <img src={movieDetail.poster} alt={movieDetail.title} />
          <div>
            <h2>{movieDetail.title}</h2>
            <ul></ul>
            <h5>{movieDetail.description}</h5>
          </div>
          <div>
            <button onClick={() => history.push("/")}>Back to List</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
