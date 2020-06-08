import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonDisplayer from "./components/PokemonDisplayer";
import HomePage from "./components/HomePage";
import MovieList from "./components/MovieList";
import RateMovie from "./components/RateMovie";
import RequestReco from "./components/RequestReco";

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
              <Link to="/demo">API Fetch demo</Link>
            </li>
            <li>
              <Link to="/list">Liste des films</Link>
            </li>
            <li>
              <Link to="/rate">Noter un film</Link>
            </li>
            <li>
              <Link to="/reco">Demander une recommandation</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/demo">
            <PokemonDisplayer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/liste">
            <MovieList />
          </Route>
          <Route>
            <RateMovie />
          </Route>
          <Route>
            <RequestReco />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
