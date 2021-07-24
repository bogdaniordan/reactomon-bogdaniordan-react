import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import  {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class PokemonListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: []
        }
        this.goToPokemonDetails = this.goToPokemonDetails.bind(this)
    }

    goToPokemonDetails(iterationNumber) {
        PokemonService.getPokemonDetailsById(iterationNumber).then(r => {
            console.log(r.data)
        })
    }

    componentDidMount() {
        PokemonService.getListOfPokemons().then(r => {
            this.setState({pokemons: r.data.results})
            console.log(r.data)
            console.log(this.state.pokemons)
        })
    }
    render() {
        return (
            <div>
                <NavbarComponent />
                {
                    this.state.pokemons.map(
                        (pokemon, number) =>  <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                           <Card.Body>
                                            <Card.Title>{pokemon.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => this.goToPokemonDetails(number + 1)}>Learn more</Button>
                                            </Card.Body>
                                    </Card>
                    )
                }
                {/*<CardGroup>*/}
                {/*    {*/}
                {/*        this.state.pokemons.map(*/}
                {/*            pokemon =>  <Card>*/}
                {/*                            <Card.Img variant="top" src="holder.js/100px160" />*/}
                {/*                            <Card.Body>*/}
                {/*                                <Card.Title>{pokemon.name}</Card.Title>*/}
                {/*                                <Card.Text>*/}
                {/*                                    This is a wider card with supporting text below as a natural lead-in to*/}
                {/*                                    additional content. This content is a little bit longer.*/}
                {/*                                </Card.Text>*/}
                {/*                            </Card.Body>*/}
                {/*                            /!*<Card.Footer>*!/*/}
                {/*                            /!*    <small className="text-muted">Last updated 3 mins ago</small>*!/*/}
                {/*                            /!*</Card.Footer>*!/*/}
                {/*                        </Card>*/}
                {/*        )*/}
                {/*    }*/}
                {/*    /!*<Card>*!/*/}
                {/*    /!*    <Card.Img variant="top" src="holder.js/100px160" />*!/*/}
                {/*    /!*    <Card.Body>*!/*/}
                {/*    /!*        <Card.Title>Card title</Card.Title>*!/*/}
                {/*    /!*        <Card.Text>*!/*/}
                {/*    /!*            This is a wider card with supporting text below as a natural lead-in to*!/*/}
                {/*    /!*            additional content. This content is a little bit longer.*!/*/}
                {/*    /!*        </Card.Text>*!/*/}
                {/*    /!*    </Card.Body>*!/*/}
                {/*    /!*    <Card.Footer>*!/*/}
                {/*    /!*        <small className="text-muted">Last updated 3 mins ago</small>*!/*/}
                {/*    /!*    </Card.Footer>*!/*/}
                {/*    /!*</Card>*!/*/}
                {/*</CardGroup>*/}
            </div>
        );
    }
}

export default PokemonListComponent;