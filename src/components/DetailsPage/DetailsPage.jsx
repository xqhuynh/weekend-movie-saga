import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function DetailsPage() {
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  // Params are set to id when details/:id is added to app route path
  let { id } = useParams();
  // params is id at path /details/:id
  let detail = {};
  console.log("In details page with id", id);

  // function to get movide detail using logic
  // if movie.id matches useParams id, then sent movie to detail
  function findMovieDetail() {
    // console.log('ID is ', id);
    for (let movie of movies) {
      if (movie.id === Number(id)) {
        detail = movie;
      }
    } // end of for loop
  }

  findMovieDetail();

  return (
    <>
      <div>
        <div>
          <h4>Move Details</h4>
          <img src={detail.poster} alt={detail.title} />
          <div>
            <h2>{detail.title}</h2>
            <h5>{detail.description}</h5>
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
