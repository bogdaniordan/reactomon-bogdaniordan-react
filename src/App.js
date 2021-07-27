import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, {useContext} from "react";
import PokemonListComponent from "./components/PokemonListComponent";
import PokemonDetailsComponent from "./components/PokemonDetailsComponent";
import PokemonTypesComponent from "./components/PokemonTypesComponent";
import {PokemonProvider} from "./components/PokemonContext";
import CaughtPokemons from "./components/CaughtPokemons";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./components/ThemeContext";
import {ThemeContext} from "./components/ThemeContext";
import Main from "./components/Main"


function App() {
    return (
        <ThemeProvider>
-           <PokemonProvider>
                <Main />
            </PokemonProvider>
        </ThemeProvider>
    );
}

export default App;
