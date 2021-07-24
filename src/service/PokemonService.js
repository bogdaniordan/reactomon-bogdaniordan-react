import axios from 'axios';

class PokemonService {
    getListOfPokemons() {
        return axios.get('https://pokeapi.co/api/v2/pokemon');
    }

    getPokemonDetailsById(id) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }

    getPokemonDetails(URL) {
        return axios.get(URL);
    }

}

export default new PokemonService();