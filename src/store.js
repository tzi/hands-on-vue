import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getPokemonList } from './components/pokemonService';

const state = {
    pokemonList: []
};

const actions = {
    fetchPokemonList(context) {
        return getPokemonList()
            .then(pokemonList => {
                context.commit('setPokemonList', pokemonList);
            });
    }
};

const mutations = {
    setPokemonList(state, pokemonList) {
        state.pokemonList = pokemonList;
    }
};

const getters = {
    pokemonList(state) {
        return state.pokemonList;
    }
};

Vue.use(Vuex);

export default new Store({
    state,
    actions,
    mutations,
    getters
});