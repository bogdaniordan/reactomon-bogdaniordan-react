import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import React, {useState} from "react";
import PokemonListComponent from "./components/PokemonListComponent";
import PokemonDetailsComponent from "./components/PokemonDetailsComponent";
import PokemonTypesComponent from "./components/PokemonTypesComponent";
import {PokemonProvider} from "./components/PokemonContext";
import CaughtPokemons from "./components/CaughtPokemons";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <PokemonProvider>
                <Route path="/" exact component = {HomeComponent}></Route>
                <Route path="/pokemons" component={PokemonListComponent}></Route>
                <Route path="/pokemon/:pokemonId" component={PokemonDetailsComponent}></Route>
                <Route path="/types" component={PokemonTypesComponent}></Route>
                <Route path="/caught-pokemons" component={CaughtPokemons}></Route>
            </PokemonProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
