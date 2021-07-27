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

    const [isLoading, setIsLoading] = useState(false);


    useEffect (() => {
        setIsLoading(true)
        PokemonService.getListOfPokemons().then(r => {
            setState ({pokemons: r.data.results})
            setIsLoading(false)
        })
    },[])

    if(!isLoading) {
        return (
            <div>
                <NavbarComponent/>
                <div id="cards">
                    {
                        state.pokemons.map(

                            (pokemon, number) => <PokemonCard history={props.history} pokemonId={number + 1}/>
                        )
                    }
                </div>
            </div>
        )
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }
}

export default PokemonListComponent;