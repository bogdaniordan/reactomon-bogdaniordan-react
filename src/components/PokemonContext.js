import React , {useState, createContext} from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const [caughtPokemons, setCaughtPokemons] = useState({
        pokemons: []
    })

    function catchPokemon(newPokemon) {
        let newCaughtPokemons = caughtPokemons.pokemons;
        newCaughtPokemons.push(newPokemon)
        setCaughtPokemons({pokemons: newCaughtPokemons})
    }

    return (
        <PokemonContext.Provider value={{caught: caughtPokemons.pokemons, catch: catchPokemon}}>
            {props.children}
        </PokemonContext.Provider>
    )
}