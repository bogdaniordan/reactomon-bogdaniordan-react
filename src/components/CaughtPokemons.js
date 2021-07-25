import React, {useContext} from 'react';
import NavbarComponent from "./NavbarComponent";
import {PokemonContext} from "./PokemonContext";

const CaughtPokemons = props => {
    const caughtPokemons = JSON.parse(localStorage.getItem('pokemons'));
        return (
            <div>
                <NavbarComponent />
                {/*{console.log(JSON.parse(localStorage.getItem('pokemons')))}*/}
                <h3>Caught pokemons</h3>
                {
                    caughtPokemons.map(
                        pokemon => <div>{pokemon}</div>
                    )
                }
                {/*{*/}
                {/*    pokemons.map(*/}
                {/*        pokemon => <p>{pokemon}</p>*/}
                {/*    )*/}
                {/*}*/}
                {/*<button onClick={() => pokemons.catchPokemon("IDK")}>HE</button>*/}
            </div>
        );
}

export default CaughtPokemons;