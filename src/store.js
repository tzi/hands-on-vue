import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getPokemonList } from './components/pokemonService';

const state = {
    pokemonList: [],
    searchValue: ''
};

const actions = {
    fetchPokemonList(context) {
        return getPokemonList()
            .then(pokemonList => {
                context.commit('setPokemonList', pokemonList);
            });
    },

    setSearchValue(context, searchValue) {
        return context.commit('setSearchValue', searchValue);
    }
};

const mutations = {
    setPokemonList(state, pokemonList) {
        state.pokemonList = pokemonList;
    },

    setSearchValue(state, searchValue) {
        state.searchValue = searchValue;
    }
};

const getters = {
    pokemonList(state) {
        return state.pokemonList;
    },

    searchValue(state) {
        return state.searchValue;
    }
};

Vue.use(Vuex);

export default new Store({
    state,
    actions,
    mutations,
    getters
});