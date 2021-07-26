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


function App() {

    // const [theme, setTheme] = useContext(ThemeContext);

    // const pageStyle = {
    //     backgroundColor: `${theme}`
    // }

    return (
        <div className="App">
          <Router>
            <Switch>
                <PokemonProvider>
                    <ThemeProvider>
                        {/*<Route path="/" exact component = {PokemonListComponent}></Route>*/}
                        <Route path={["/pokemons", "/"]} exact component={PokemonListComponent}></Route>
                        <Route path="/pokemon/:pokemonId" component={PokemonDetailsComponent}></Route>
                        <Route path="/types" component={PokemonTypesComponent}></Route>
                        <Route path="/caught-pokemons" component={CaughtPokemons}></Route>
                    </ThemeProvider>
                </PokemonProvider>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
