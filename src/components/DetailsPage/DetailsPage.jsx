import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

function DetailsPage() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();
  // params is id at path /details/:id
  let { id } = useParams();

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
  return <></>;
}

export default DetailsPage;
