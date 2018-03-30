<template>
  <div id="app">
    <div class="container">
      
      <!-- Cover -->
      <div class="cover">
        <img src="./assets/images/zenidex.png"/>
      </div>

      <Search />

      <Result />
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
    name: 'app',
    data () {
    }
  }
</script>

<style>

</style>
