import React, {useState, useEffect, useContext} from "react";
import '../css/list_cards.scss'
import {PokemonContext} from "./PokemonContext";
import PokemonService from "../service/PokemonService";
import NavbarComponent from "./NavbarComponent";

const PokemonCard = props => {
    const id = props.pokemonId;

    const [pokemon, setPokemon] = useState({})
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        PokemonService.getPokemonDetailsById(id).then(r => {
            setPokemon({pokemon: r.data})
            setName(r.data.name);
            setSpecies(r.data.species.name);
            setType(r.data.types[0].type.name);
            setAbilities(r.data.abilities);
            setStats(r.data.stats);
            setSprites(r.data.sprites);
            setIsLoading(false);

            console.log(stats)
            console.log(name)
            console.log(sprites)
            console.log(pokemon);
            console.log(r.data);
            console.log(abilities)
        })
    }, [])
    if (!isLoading) {
        return (
            <div>
                {/*<NavbarComponent />*/}
                {/*<div id="cards">*/}
                    <figure className="card card--normal">
                        <div className="card__image-container">
                            <img src={sprites.front_default}
                                 alt="Eevee" className="card__image"/>
                        </div>

                        <figcaption className="card__caption">
                            <h1 className="card__name">{name}</h1>

                            <h3 className="card__type">
                                {species}
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
                                    {/*{abilities[0].ability.name}*/}
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Hidden Ability</span>
                                    {/*{abilities[1].ability.name}*/}
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Details<button className="btn btn-info">GO</button></span>
                                </h4>
                            </div>
                        </figcaption>
                    </figure>
                {/*</div>*/}
            </div>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }
}

export default PokemonCard;