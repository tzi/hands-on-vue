export function getPokemonList () {
    return Promise.resolve([
        {
            id: 1,
            name: 'Bulbasaur'
        },
        {
            id: 2,
            name: 'Ivysaur'
        },
        {
            id: 3,
            name: 'Venusaur'
        }
    ]);
}