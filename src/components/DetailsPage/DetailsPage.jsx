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
      <div className="details-container">
        <h3 className="title-info">{detail.title}</h3>
        <Card style={{ width: "20rem" }}>
          <Card.Img className="card-img" variant="top" src={detail.poster} />
          <Card.Body>
            <Card.Text>{detail.description}</Card.Text>
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
