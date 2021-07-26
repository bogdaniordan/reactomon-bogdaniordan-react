import React, {useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import {Button, Card} from 'react-bootstrap';
import '../css/list_cards.scss'
import PokemonCard from "./PokemonCard";


const PokemonListComponent = props => {
    const [state, setState] = useState({
        pokemons: []
    });

    useEffect (() => {
        PokemonService.getListOfPokemons().then(r => {
            setState ({pokemons: r.data.results})
        })
    })
    return (
        <div>
            <NavbarComponent/>
            <div id="cards">
                {
                    state.pokemons.map(

                        (pokemon, number) => <PokemonCard pokemonId={number + 1}/>
                    )
                }
            </div>
        </div>
    )

}

export default PokemonListComponent;