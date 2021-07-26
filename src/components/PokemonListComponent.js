import React, {useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import {Button, Card} from 'react-bootstrap';
import '../css/list_cards.scss'


const PokemonListComponent = props => {
    const [state, setState] = useState({
        pokemons: []
    });

    const goToPokemonDetails = pokemonNumber => {
        props.history.push(`pokemon/${pokemonNumber}`)
    }

    useEffect (() => {
        PokemonService.getListOfPokemons().then(r => {
            setState ({pokemons: r.data.results})
        })
    })
    return (
        <div>
            <NavbarComponent/>
            <div id="cards">
                <figure className="card card--normal">
                    <div className="card__image-container">
                        <img src="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png"
                             alt="Eevee" className="card__image"/>
                    </div>

                    <figcaption className="card__caption">
                        <h1 className="card__name">Eevee</h1>

                        <h3 className="card__type">
                            normal
                        </h3>

                        <table className="card__stats">
                            <tbody>
                            <tr>
                                <th>HP</th>
                                <td>55</td>
                            </tr>
                            <tr>
                                <th>Attack</th>
                                <td>55</td>
                            </tr>

                            <tr>
                                <th>Defense</th>
                                <td>50</td>
                            </tr>

                            <tr>
                                <th>Special Attack</th>
                                <td>45</td>
                            </tr>
                            <tr>
                                <th>Special Defense</th>
                                <td>65</td>
                            </tr>
                            <tr>
                                <th>Speed</th>
                                <td>55</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="card__abilities">
                            <h4 className="card__ability">
                                <span className="card__label">Ability</span>
                                Run Away
                            </h4>
                            <h4 className="card__ability">
                                <span className="card__label">Hidden Ability</span>
                                Anticipation
                            </h4>
                        </div>
                    </figcaption>
                </figure>
            {/*<script id="card-template" type="text/x-handlebars-template">*/}
            {/*    <figure className="card card--{{type}}">*/}
            {/*        <div className="card__image-container">*/}
            {/*            <img src="{{imageAddress}}" alt="{{name}}" className="card__image"/>*/}
            {/*        </div>*/}

            {/*        <figcaption className="card__caption">*/}
            {/*            <h1 className="card__name">{{name}}</h1>*/}

            {/*            <h3 className="card__type">e*/}
            {/*                {{type}}*/}
            {/*            </h3>*/}

            {/*            <table className="card__stats">*/}
            {/*                <tr>*/}
            {/*                    <th>HP</th>*/}
            {/*                    <td>{{hp}}</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <th>Attack</th>*/}
            {/*                    <td>{{attack}}</td>*/}
            {/*                </tr>*/}

            {/*                <tr>*/}
            {/*                    <th>Defense</th>*/}
            {/*                    <td>{{defense}}</td>*/}
            {/*                </tr>*/}

            {/*                <tr>*/}
            {/*                    <th>Special Attack</th>*/}
            {/*                    <td>{{spAttack}}</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <th>Special Defense</th>*/}
            {/*                    <td>{{spDefense}}</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <th>Speed</th>*/}
            {/*                    <td>{{speed}}</td>*/}
            {/*                </tr>*/}
            {/*            </table>*/}

            {/*            <div className="card__abilities">*/}
            {/*                <h4 className="card__ability">*/}
            {/*                    <span className="card__label">Ability</span>*/}
            {/*                    {{ability1}}*/}
            {/*                </h4>*/}
            {/*                <h4 className="card__ability">*/}
            {/*                    <span className="card__label">Hidden Ability</span>*/}
            {/*                    {{ability2}}*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </figcaption>*/}
            {/*    </figure>*/}
            {/*</script>*/}
            </div>

            {/*{*/}
            {/*    state.pokemons.map(*/}
            {/*        (pokemon, number) => <Card style={{width: '18rem'}}>*/}
            {/*            <Card.Img variant="top"*/}
            {/*                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G0uPlhZ-8uNw9xPXpgzTiAxHuv3Z-iXjkQ&usqp=CAU"/>*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title>{pokemon.name}</Card.Title>*/}
            {/*                <Card.Text>*/}
            {/*                    Some quick example text to build on the card title and make up the bulk of*/}
            {/*                    the card's content.*/}
            {/*                </Card.Text>*/}
            {/*                <Button variant="primary" onClick={() => goToPokemonDetails(number + 1)}>Learn more</Button>*/}
            {/*            </Card.Body>*/}
            {/*        </Card>*/}
            {/*    )*/}
            {/*}*/}
        </div>
    )

}

export default PokemonListComponent;