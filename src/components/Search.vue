<template>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="text" placeholder="Pokemon name" v-model="searchValue" @input="handleInput"/>
    <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
  </div>
</template>


<script>
    export default {
        name: 'search',
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            handleInput: function () {
                this.$store.dispatch('setSearchValue', this.searchValue);
            }
        }
  }
</script>

<style>

</style>
