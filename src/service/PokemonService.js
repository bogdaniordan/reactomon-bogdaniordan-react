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

    getPokemonTypes() {
        return axios.get('https://pokeapi.co/api/v2/type');
    }

}

export default new PokemonService();