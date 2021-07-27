import React, {useContext} from 'react';
import NavbarComponent from "./NavbarComponent";
import {PokemonContext} from "./PokemonContext";

const CaughtPokemons = props => {
    const caughtPokemons = JSON.parse(localStorage.getItem('pokemons'));

    if(caughtPokemons) {
        return (
            <div>
                <NavbarComponent />
                <h3>Caught pokemons</h3>
                {
                    caughtPokemons.map(
                        pokemon => <div>{pokemon}</div>
                    )
                }
            </div>
        );
    } else {
        return (
            <div>
                <NavbarComponent />
                <h3>No caught pokemons</h3>
            </div>
        )
    }

}

export default CaughtPokemons;