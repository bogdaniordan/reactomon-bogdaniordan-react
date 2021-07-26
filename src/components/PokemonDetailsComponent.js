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
    const [isLoading, setIsLoading] = useState(false);

    function createLocalStorage() {
        if (!JSON.parse(localStorage.getItem("pokemons"))) {
            console.log("2D")
            localStorage.setItem("pokemons", JSON.stringify([]))
        }
    }

    useEffect(() => {
        setIsLoading(true);
        PokemonService.getPokemonDetailsById(id).then(r => {
            setStats(r.data.stats);
            setPokemon({pokemon: r.data})
            setName(r.data.name);
            setSpecies(r.data.species.name);
            setType(r.data.types[0].type.name);
            setAbilities(r.data.abilities);
            setSprites(r.data.sprites);
            setIsLoading(false);

            createLocalStorage();

            console.log(JSON.parse(localStorage.getItem("pokemons")))
            console.log(name);

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
                <NavbarComponent />
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-md-5">*/}
                {/*            <div className="project-info-box mt-0">*/}
                {/*                <h5>{name}</h5>*/}
                {/*                <p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor*/}
                {/*                    porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est.*/}
                {/*                    Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>*/}
                {/*            </div>*/}

                {/*            <div className="project-info-box">*/}
                {/*                /!*<p><b>Base experience:</b> {state.pokemon.base_experience}</p>*!/*/}
                {/*                /!*<p><b>Height:</b> {state.pokemon.height}</p>*!/*/}
                {/*                /!*<p><b>Weight:</b> {state.pokemon.weight}</p>*!/*/}
                {/*                /!*<p className="mb-0"><b>Budget:</b> $500</p>*!/*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*        <div className="col-md-7">*/}
                {/*            <img src="https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png" alt="project-image"*/}
                {/*                 className="rounded"/>*/}
                {/*            <div className="project-info-box">*/}
                {/*                {JSON.parse(localStorage.getItem("pokemons")) ? JSON.parse(localStorage.getItem("pokemons")).includes(name) ? <p>ALREADY CAUGHT!</p> : <button className="btn btn-success" onClick={() => pokemons.catchPokemon(name)}>Catch!</button> : ""}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

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
                                        {/*<p className="fw-bold h4 mt-3">John Doe</p>*/}
                                        {/*<p className="text-muted">Full Stack Developer</p>*/}
                                        {/*<p className="text-muted mb-3">Soma,San Francisco, CA</p>*/}
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
                                    {/*<div className="d-flex align-items-center justify-content-between border-bottom">*/}
                                    {/*    <p className="py-2">Mobile</p>*/}
                                    {/*    <p className="py-2 text-muted">(320) 380-4539</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="d-flex align-items-center justify-content-between">*/}
                                    {/*    <p className="py-2">Address</p>*/}
                                    {/*    <p className="py-2 text-muted"> Soma,San Francisco,CA</p>*/}
                                    {/*</div>*/}
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