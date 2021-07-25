import React , {useState, createContext} from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const [caughtPokemons, setCaughtPokemons] = useState({
        pokemons: []
    })

    function catchPokemon(newPokemon) {
        let newCaughtPokemons;
        if (JSON.parse(localStorage.getItem("pokemons"))) {
            newCaughtPokemons = JSON.parse(localStorage.getItem("pokemons"));
        } else {
            newCaughtPokemons = [];
        }
        console.log(newCaughtPokemons)
        newCaughtPokemons.push(newPokemon)
        setCaughtPokemons({pokemons: newCaughtPokemons})
        localStorage.setItem('pokemons', JSON.stringify(newCaughtPokemons));
    }

    return (
        <PokemonContext.Provider value={{caught: caughtPokemons.pokemons, catchPokemon}}>
            {props.children}
        </PokemonContext.Provider>
    )
}