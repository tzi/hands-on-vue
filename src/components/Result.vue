<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">

      <div v-if="loading">
        <h1>Loading...</h1>
      </div>

      <router-link class="column is-2 has-text-centered" v-for="pokemon of pokemonList" :to="`/pokemon/${pokemon.id}`" :key="pokemon.id" v-if="filterOnPokemon(pokemon)">
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
        data() {
            return {
              loading: true,
            }
        },
        methods: {
          filterOnPokemon: function(pokemon) {
            const lowerSearch = this.searchValue.toLowerCase();
            const lowerPokemon = pokemon.name.toLowerCase();
            return lowerPokemon.includes(lowerSearch);
          },
        },
        async mounted() {
          this.loading = false;
          this.$store.dispatch('fetchPokemonList');
        },
        computed: {
            ...mapGetters({
                pokemonList: 'pokemonList',
                searchValue: 'searchValue'
            })
        }
    }
</script>

<style scoped>

</style>
