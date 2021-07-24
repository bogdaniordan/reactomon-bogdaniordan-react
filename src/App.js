import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import React from "react";
import PokemonListComponent from "./components/PokemonListComponent";
import PokemonDetailsComponent from "./components/PokemonDetailsComponent";
import PokemonTypesComponent from "./components/PokemonTypesComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component = {HomeComponent}></Route>
            <Route path="/pokemons" component={PokemonListComponent}></Route>
            <Route path="/pokemon/:pokemonId" component={PokemonDetailsComponent}></Route>
            <Route path="/types" component={PokemonTypesComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
