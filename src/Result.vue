<template>
    <div class="resultset">
        <div class="columns is-multiline">
            <Card v-for="pokemon of pokemonList"
                  :pokemon="pokemon"
                  :key="pokemon.id"
                  v-if="pokemonSlugList[pokemon.id].indexOf(lowerFilter) !== -1"
            ></Card>

        </div>
    </div>
</template>

<script>
    import { getPokemonList } from './pokemonService';
    import Card from './Card';

    export default {
        components: {
            Card,
        },
        props: {
            filter: String,
        },
        computed: {
            lowerFilter() {
                return this.filter.toLowerCase();
            },
            pokemonSlugList() {
                return this.pokemonList.reduce((slugList, pokemon) => {
                    slugList[pokemon.id] = pokemon.name.toLowerCase();

                    return slugList;
                }, {});
            }
        },
        data() {
            return {
                pokemonList: getPokemonList()
            }
        }
    }
</script>
