import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import React from "react";
import PokemonListComponent from "./components/PokemonListComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component = {HomeComponent}></Route>
            <Route path="/pokemon-list" component={PokemonListComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
