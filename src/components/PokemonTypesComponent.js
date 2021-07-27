import React, {Component, useState, useEffect} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import {Card, Button} from 'react-bootstrap';

const PokemonTypesComponent = props => {
    const [state, setState] = useState({
        types: []
    })

    useEffect(() => {
    PokemonService.getPokemonTypes().then(r => {
        setState({types: r.data.results})
        })
    })

        return (
            <div>
                <NavbarComponent />
                {
                    state.types.map(
                        type => <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>{type.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                    )
                }
            </div>
        );
}

export default PokemonTypesComponent;