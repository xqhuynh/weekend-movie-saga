import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DetailsPage() {
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  // Params are set to id when details/:id is added to app route path
  let { id } = useParams();
  // params is id at path /details/:id
  let movieDetail = {};
  console.log("In details page with id", id);

  // function to get movide detail using logic
  // if movie.id matches useParams id, then sent movie to detail
  function getMovieDetail() {
    // console.log('ID is ', id);
    for (let movie of movies) {
      if (movie.id === Number(id)) {
        movieDetail = movie;
      }
    } // end of for loop
  }

  getMovieDetail();

  // Alternatively, use Link instead of history

  return (
    <>
      <div className="details-container">
        <h3 className="title-info">{movieDetail.title}</h3>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            className="card-img"
            variant="top"
            src={movieDetail.poster}
          />
          <Card.Body>
            <Card.Text>{movieDetail.description}</Card.Text>
            <Button varian="primary" onClick={() => history.push("/")}>
              Back to Movie List
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default DetailsPage;

// TO DO
// 1. Styling
// 2. Search form, request 3rd party API
