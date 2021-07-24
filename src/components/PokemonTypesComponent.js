import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import {Card, Button} from 'react-bootstrap';

class PokemonTypesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: []
        }
    }

    componentDidMount() {
        PokemonService.getPokemonTypes().then(r => {
            this.setState({types: r.data.results})
            console.log(this.state.types)
            console.log(r.data)
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                {
                    this.state.types.map(
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
}

export default PokemonTypesComponent;