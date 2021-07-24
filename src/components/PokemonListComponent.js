import React, {useEffect, useState, Component} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const PokemonListComponent = props => {
    const [state, setState] = useState({
        pokemons: []
    });
    // // constructor(props) {
    // //     super(props)
    // //     this.state = {
    // //         pokemons: []
    // //     }
    // //     this.goToPokemonDetails = this.goToPokemonDetails.bind(this)
    // // }
    //
    const goToPokemonDetails = pokemonNumber => {
        props.history.push(`pokemon/${pokemonNumber}`)
    }
    //
    useEffect (() => {
        PokemonService.getListOfPokemons().then(r => {
            setState ({pokemons: r.data.results})
        })
    })
    let content = (
            <div>
                <NavbarComponent />
                {
                    state.pokemons.map(
                        (pokemon, number) =>  <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G0uPlhZ-8uNw9xPXpgzTiAxHuv3Z-iXjkQ&usqp=CAU" />
                                           <Card.Body>
                                             <Card.Title>{pokemon.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => goToPokemonDetails(number + 1)}>Learn more</Button>
                                            </Card.Body>
                                    </Card>
                    )
                }
            </div>
        );

    return content

}

export default PokemonListComponent;