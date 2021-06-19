import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import MovieForm from '../MovieForm/MovieForm.jsx';

function App() {

  return (

    <div className="App">

      <h1>The Movies Saga!</h1>

      <Router>

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <Details />
        </Route>

        <Route path="/movieform">
          <MovieForm />
        </Route>

      </Router>

    </div>
  ); // end return

} // end App fn


export default App;
