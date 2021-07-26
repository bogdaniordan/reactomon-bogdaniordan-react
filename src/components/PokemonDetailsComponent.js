import NavbarComponent from "./NavbarComponent";
// import "../css/details.css";
import PokemonService from "../service/PokemonService";
import React, {useState, useEffect, useContext} from "react";
import {PokemonContext} from "./PokemonContext";
import '../css/list_cards.scss'


const PokemonDetailsComponent = props => {
    const id = props.match.params.pokemonId;

    const pokemons = useContext(PokemonContext);

    const [pokemon, setPokemon] = useState({})
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState({});



    useEffect(() => {
        PokemonService.getPokemonDetailsById(id).then(r => {
            setPokemon({pokemon: r.data})
            setName(r.data.name);
            setSpecies(r.data.species.name);
            setType(r.data.types[0].type.name);
            setAbilities(r.data.abilities);
            setStats(r.data.stats);
            setSprites(r.data.sprites);
            console.log(stats)
            console.log(name)
            console.log(sprites)
            console.log(pokemon);
            console.log(r.data);
        })
    }, [])

        return (
            <div>
                <NavbarComponent />
                <div id="cards">
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
                                    Run Away
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Hidden Ability</span>
                                    Anticipation
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Catch pokemon<button className="btn btn-info">Catch</button></span>
                                </h4>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-md-5">*/}
                {/*            <div className="project-info-box mt-0">*/}
                {/*                <h5>{name.name}</h5>*/}
                {/*                /!*<p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor*!/*/}
                {/*                /!*    porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est.*!/*/}
                {/*                /!*    Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>*!/*/}
                {/*            </div>*/}

                {/*            <div className="project-info-box">*/}
                {/*                <p><b>Base experience:</b> {state.pokemon.base_experience}</p>*/}
                {/*                <p><b>Height:</b> {state.pokemon.height}</p>*/}
                {/*                <p><b>Weight:</b> {state.pokemon.weight}</p>*/}
                {/*                /!*<p className="mb-0"><b>Budget:</b> $500</p>*!/*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*        <div className="col-md-7">*/}
                {/*            <img src="https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png" alt="project-image"*/}
                {/*                 className="rounded"/>*/}
                {/*                <div className="project-info-box">*/}
                {/*                    {JSON.parse(localStorage.getItem("pokemons")).includes(name.name) ? <p>ALREADY CAUGHT!</p> : <button className="btn btn-success" onClick={() => pokemons.catchPokemon(name.name)}>Catch it!</button>}*/}
                {/*                </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
}

export default PokemonDetailsComponent;