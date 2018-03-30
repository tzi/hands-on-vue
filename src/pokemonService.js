import axios from 'axios';

export function getPokemonList () {
    return axios.get('https://pokeapi.co/api/v2/pokedex/1/')
        .then(result => result.data.pokemon_entries.map(pokemon => ({
            id: pokemon.entry_number,
            name: pokemon.pokemon_species.name
        })));
}