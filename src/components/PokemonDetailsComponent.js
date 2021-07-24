import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";
import "../css/details.css";
import PokemonService from "../service/PokemonService";

class PokemonDetailsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.pokemonId,
            pokemon: "",
            name: ""
        }
    }

    componentDidMount() {
        PokemonService.getPokemonDetailsById(this.state.id).then(r => {
            this.setState({pokemon: r.data})
            console.log(r.data)
            this.setState({name: this.state.pokemon.forms[0].name})
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="project-info-box mt-0">
                                <h5>{this.state.name}</h5>
                                {/*<p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor*/}
                                {/*    porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est.*/}
                                {/*    Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>*/}
                            </div>

                            <div className="project-info-box">
                                <p><b>Base experience:</b> {this.state.pokemon.base_experience}</p>
                                <p><b>Height:</b> {this.state.pokemon.height}</p>
                                <p><b>Weight:</b> {this.state.pokemon.weight}</p>
                                {/*<p className="mb-0"><b>Budget:</b> $500</p>*/}
                            </div>

                        </div>

                        <div className="col-md-7">
                            <img src="https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png" alt="project-image"
                                 className="rounded"/>
                                <div className="project-info-box">
                                    <p><b>Categories:</b> Design, Illustration</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonDetailsComponent;