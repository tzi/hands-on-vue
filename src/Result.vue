<template>
    <div class="resultset">
        <div class="columns is-multiline">
{{ filter }}
            <Card v-for="pokemon of pokemonList" :pokemon="pokemon" :key="pokemon.id"></Card>

        </div>
    </div>
</template>

<script>
    import Card from './Card';

    export default {
        components: {
            Card,
        },
        props: {
            filter: String,
        },
        data() {
            return {
                pokemonList: [
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
                ]
            }
        }
    }
</script>
