import React, {useState, useEffect, useContext} from "react";
import '../css/list_cards.scss'
import PokemonService from "../service/PokemonService";

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

    const goToPokemonDetails= () => {
        props.history.push(`pokemon/${id}`)
    }

    useEffect(() => {
        setIsLoading(true);
        PokemonService.getPokemonDetailsById(id).then(r => {
            setPokemon(r.data)
            setName(r.data.name);
            setSpecies(r.data.species.name);
            setType(r.data.types[0].type.name);
            setAbilities(r.data.abilities);
            setStats(r.data.stats);
            setSprites(r.data.sprites);
            setIsLoading(false);
        })
    }, [id])
    if (!isLoading) {
        return (
            <div>
                    <figure className="card card--normal">
                        <div className="card__image-container">
                            <img src={sprites.front_default}
                                 alt="Eevee" className="card__image"/>
                        </div>

                        <figcaption className="card__caption">
                            <h1 className="card__name">{name}</h1>

                            <h3 className="card__type">
                                {type}
                            </h3>

                            <table className="card__stats">
                                <tbody>
                                <tr>
                                    <th>HP</th>
                                    {/*<td>{stats[0].base_stat}</td>*/}
                                </tr>
                                <tr>
                                    <th>Attack</th>
                                    {/*<td>{stats[1].base_stat}</td>*/}
                                </tr>

                                <tr>
                                    <th>Defense</th>
                                    {/*<td>{stats[2].base_stat}</td>*/}
                                </tr>

                                <tr>
                                    <th>Special Attack</th>
                                    {/*<td>{stats[3].base_stat}</td>*/}
                                </tr>
                                <tr>
                                    <th>Special Defense</th>
                                    {/*<td>{stats[4].base_stat}</td>*/}
                                </tr>
                                <tr>
                                    <th>Speed</th>
                                    {/*<td>{stats[5].base_stat}</td>*/}
                                </tr>
                                </tbody>
                            </table>

                            <div className="card__abilities">
                                <h4 className="card__ability">
                                    <span className="card__label">Ability</span>
                                    {/*{abilities[0].ability.name}*/}
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Details<button className="btn btn-info" onClick={() => goToPokemonDetails()}>GO</button></span>
                                </h4>
                            </div>
                        </figcaption>
                    </figure>
            </div>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }
}

export default PokemonCard;