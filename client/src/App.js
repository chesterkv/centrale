import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonDisplayer from "./components/PokemonDisplayer";
import HomePage from "./components/HomePage";
import RateMovie from "./components/RateMovie";
import RequestReco from "./components/RequestReco";
import MovieSearch from "./components/MovieSearch";
import bootstrap.css

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
              <Link to="/demo">Liste des films</Link>
            </li>
            <li>
              <Link to="/search">Rechercher un film</Link>
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
          <Route path="/search">
            <MovieSearch />
          </Route>
          <Route path="/rate">
            <RateMovie />
          </Route>
          <Route path="/Reco">
            <RequestReco />
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
