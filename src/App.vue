<template>
  <div id="app">
    <div class="container">
      
      <!-- Cover -->
      <div class="cover">
        <img src="./assets/images/zenidex.png"/>
      </div>

      <Search @searchChange="searchChange" />

      <Result :filter="searchValue" />
    </div>
  </div>
</template>

<script>
  import Result from './Result';
  import Search from './Search';

  export default {
    components: {
        Result,
        Search
    },
    methods: {
        searchChange(searchValue) {
            this.searchValue = searchValue;
        }
    },
    name: 'app',
    data () {
        return {
            searchValue: ''
        };
    }
  }
</script>

<style>

</style>
