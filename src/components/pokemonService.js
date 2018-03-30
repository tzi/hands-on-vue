import axios from 'axios';

export function getPokemonList() {
  return axios
    .get('https://pokeapi.co/api/v2/pokedex/1/')
    .then(res => res.data)
    .then(({ pokemon_entries }) => {
      return pokemon_entries.map(pokemon => ({
        id: pokemon.entry_number,
        name: pokemon.pokemon_species.name,
      }));
    });
}

export function getPokemon(id) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.data);
}
