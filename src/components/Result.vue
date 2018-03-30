<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">

      <div v-if="loading">
        <h1>Loading...</h1>
      </div>

      <router-link class="column is-2 has-text-centered" v-for="pokemon of pokemonList" :to="`/pokemon/${pokemon.id}`" :key="pokemon.id">
        <card :pokemon="pokemon" v-if="!loading"></card>
      </router-link>

    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Card from './Card';

    export default {
        name: "result",
        components: {
          Card
        },
        computed: {
            ...mapGetters({
                pokemonList: 'filteredPokemonList',
                searchValue: 'searchValue',
                loading: 'loading'
            })
        }
    }
</script>

<style scoped>

</style>
