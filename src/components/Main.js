import React, {Component, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PokemonProvider} from "./PokemonContext";
import PokemonListComponent from "./PokemonListComponent";
import PokemonDetailsComponent from "./PokemonDetailsComponent";
import PokemonTypesComponent from "./PokemonTypesComponent";
import CaughtPokemons from "./CaughtPokemons";
import {ThemeContext} from "./ThemeContext";


const Main = props => {
    const [theme, setTheme] = useContext(ThemeContext);

    const pageStyle = {
        backgroundColor: `${theme}`,
        paddingBottom: '10px'
    }

        return (
            <div>
                <Router>
                    <div className="App" style={pageStyle}>
                        <Switch>
                            <PokemonProvider>
                                <Route path={["/pokemons", "/"]} exact component={PokemonListComponent}></Route>
                                <Route path="/pokemon/:pokemonId" component={PokemonDetailsComponent}></Route>
                                <Route path="/types" component={PokemonTypesComponent}></Route>
                                <Route path="/caught-pokemons" component={CaughtPokemons}></Route>
                            </PokemonProvider>
                        </Switch>
                    </div>
                </Router>
            </div>
        );

}

export default Main;