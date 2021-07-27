import './App.css';
import React, {useContext} from "react";
import {PokemonProvider} from "./components/PokemonContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./components/ThemeContext";
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
