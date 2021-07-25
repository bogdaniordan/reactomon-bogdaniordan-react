import NavbarComponent from "./NavbarComponent";
import "../css/details.css";
import PokemonService from "../service/PokemonService";
import {useState, useEffect, useContext} from "react";
import {PokemonContext} from "./PokemonContext";

const PokemonDetailsComponent = props => {
    const pokemons = useContext(PokemonContext);

    const [state, setState] = useState({
        id: props.match.params.pokemonId,
        pokemon: "",
    })

    const [name, setName] = useState({
        name: ""
    })

    useEffect(() => {
        PokemonService.getPokemonDetailsById(state.id).then(r => {
            setState({pokemon: r.data})
            setName({name: r.data.forms[0].name})
        })
    })

        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="project-info-box mt-0">
                                <h5>{name.name}</h5>
                                {/*<p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor*/}
                                {/*    porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est.*/}
                                {/*    Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>*/}
                            </div>

                            <div className="project-info-box">
                                <p><b>Base experience:</b> {state.pokemon.base_experience}</p>
                                <p><b>Height:</b> {state.pokemon.height}</p>
                                <p><b>Weight:</b> {state.pokemon.weight}</p>
                                {/*<p className="mb-0"><b>Budget:</b> $500</p>*/}
                            </div>

                        </div>

                        <div className="col-md-7">
                            <img src="https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png" alt="project-image"
                                 className="rounded"/>
                                <div className="project-info-box">
                                    {JSON.parse(localStorage.getItem("pokemons")).includes(name.name) ? <p>ALREADY CAUGHT!</p> : <button className="btn btn-success" onClick={() => pokemons.catchPokemon(name.name)}>Catch it!</button>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default PokemonDetailsComponent;