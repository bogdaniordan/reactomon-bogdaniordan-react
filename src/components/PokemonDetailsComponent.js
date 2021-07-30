import NavbarComponent from "./NavbarComponent";
import PokemonService from "../service/PokemonService";
import React, {useState, useEffect, useContext} from "react";
import {PokemonContext} from "./PokemonContext";
import '../css/list_cards.scss'


const PokemonDetailsComponent = props => {
    const id = props.match.params.pokemonId;

    const pokemons = useContext(PokemonContext);

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    function createLocalStorage() {
        if (!JSON.parse(localStorage.getItem("pokemons"))) {
            localStorage.setItem("pokemons", JSON.stringify([]))
        }
    }

    useEffect(() => {
        PokemonService.getPokemonDetailsById(id).then(r => {
            setStats(r.data.stats);
            setName(r.data.name);
            setSpecies(r.data.species.name);
            setType(r.data.types[0].type.name);
            setAbilities(r.data.abilities);
            setSprites(r.data.sprites);
            setIsLoading(false);

            createLocalStorage();
            console.log(stats)
        })
    }, [])
    if (!isLoading) {
        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                                    <div className="d-flex flex-column align-items-center"><img className="photo"
                                                                                                src={sprites.front_default}
                                                                                                alt=""/>
                                        <div className="d-flex ">
                                            {JSON.parse(localStorage.getItem("pokemons")) ? JSON.parse(localStorage.getItem("pokemons")).includes(name) ? <p>ALREADY CAUGHT!</p> : <button className="btn btn-success" onClick={() => pokemons.catchPokemon(name)}>Catch!</button> : ""}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                        <p><span className="fas fa-globe me-2"></span>Website</p> <a
                                        href="#">https://bootdey.com</a>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                        <p><span className="fab fa-github-alt me-2"></span>Github</p> <a
                                        href="">bootdey</a>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                        <p><span className="fab fa-twitter me-2"></span>Twitter</p> <a
                                        href="">@bootdey</a>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                        <p><span className="fab fa-instagram me-2"></span>Instagram</p> <a
                                        href="">bootdey</a>
                                    </div>
                                    <div className="d-flex justify-content-between py-2 px-3">
                                        <p><span className="fab fa-facebook-f me-2"></span>facebook</p> <a
                                        href="">bootdey</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 ps-md-4">
                            <div className="row">
                                <div className="col-12 bg-white px-3 mb-3 pb-3">
                                    <div className="d-flex align-items-center justify-content-between border-bottom">
                                        <p className="py-2">Name</p>
                                        <p className="py-2 text-muted">{name}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between border-bottom">
                                        <p className="py-2">Species</p>
                                        <p className="py-2 text-muted">{species}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between border-bottom">
                                        <p className="py-2">Type</p>
                                        <p className="py-2 text-muted">{type}</p>
                                    </div>
                                </div>
                                <div className="col-12 bg-white px-3 pb-2">
                                    <h6 className="d-flex align-items-center mb-3 fw-bold py-3"><i
                                        className="text-info me-2"></i>Stats</h6> <small>HP</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}}
                                             aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Attack</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}}
                                             aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Defense</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}}
                                             aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Special Attack</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}}
                                             aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Speed</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}}
                                             aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }

}

export default PokemonDetailsComponent;