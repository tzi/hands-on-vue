<template>
    <div class="resultset">
        <div class="columns is-multiline">

            <Card v-for="pokemon of pokemonList" :id="pokemon.id" :name="pokemon.name" :key="pokemon.id"></Card>

        </div>
    </div>
</template>

<script>
    import Card from './Card';

    export default {
        components: {
            Card,
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
