import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RateMovie from "./components/RateMovie";
import SearchMovie from "./components/MovieSearch";
import ShowMovieInfo from "./components/ShowMovieInfo";
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Rechercher un film</Link>
            </li>
            <li>
              <Link to="/movies/Avengers">Go to movie</Link>
            </li>
            <li>
              <Link to="/rate">Noter un film</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies/:name">
            <ShowMovieInfo />
          </Route>
          <Route path="/search">
            <SearchMovie />
          </Route>
          <Route path="/rate">
            <RateMovie />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
