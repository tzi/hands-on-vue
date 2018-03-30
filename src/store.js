import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getPokemonList } from './components/pokemonService';

const state = {
    pokemonList: [],
    searchValue: '',
    loading: true,
};

const actions = {
    fetchPokemonList(context) {
        return getPokemonList()
            .then(pokemonList => {
                context.commit('setPokemonList', pokemonList);
                context.commit('setLoading', false);
            });
    },

    setSearchValue(context, searchValue) {
        return context.commit('setSearchValue', searchValue.toLowerCase());
    }
};

const mutations = {
    setPokemonList(state, pokemonList) {
        state.pokemonList = pokemonList;
    },

    setSearchValue(state, searchValue) {
        state.searchValue = searchValue;
    },

    setLoading(state, loading) {
        state.loading = loading;
    }
};

const getters = {
    filteredPokemonList(state) {
        return state.pokemonList.filter(pokemon => {
            return pokemon.name.includes(state.searchValue);
        });
    },

    searchValue(state) {
        return state.searchValue;
    },

    loading(state) {
        return state.loading;
    }
};

Vue.use(Vuex);

export default new Store({
    state,
    actions,
    mutations,
    getters
});