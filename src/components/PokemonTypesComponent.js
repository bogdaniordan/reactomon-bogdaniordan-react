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
                                    {/*<Card.Header>Featured</Card.Header>*/}
                                    <Card.Body>
                                        <Card.Title>{type.name}</Card.Title>
                                        {/*<Card.Text>*/}
                                        {/*    With supporting text below as a natural lead-in to additional content.*/}
                                        {/*</Card.Text>*/}
                                        {/*<Button variant="primary">Go somewhere</Button>*/}
                                    </Card.Body>
                                    {/*<Card.Footer className="text-muted">2 days ago</Card.Footer>*/}
                                </Card>
                    )
                }
            </div>
        );
}

export default PokemonTypesComponent;