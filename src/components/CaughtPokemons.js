import React, {useContext} from 'react';
import NavbarComponent from "./NavbarComponent";
import {PokemonContext} from "./PokemonContext";

const CaughtPokemons = props => {
    const pokemons = useContext(PokemonContext);
        return (
            <div>
                <NavbarComponent />
                {console.log(pokemons.caught)}
                {/*{*/}
                {/*    pokemons.map(*/}
                {/*        pokemon => <p>{pokemon}</p>*/}
                {/*    )*/}
                {/*}*/}
                <button onClick={() => pokemons.catch("IDK")}>HE</button>
            </div>
        );
}

export default CaughtPokemons;