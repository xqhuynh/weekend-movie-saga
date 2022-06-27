import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page  w/path /details/:id */}
        <Route path="/details/:id">
          <DetailsPage />
        </Route>

        {/* Add Movie page for later use with 3rd party api */}
      </Router>
    </div>
  );
}


export default App;
