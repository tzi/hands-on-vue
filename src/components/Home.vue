<template>
  <div class="container">

    <div class="cover">
      <img src="/src/assets/images/zenidex.png"/>
    </div>

    <div class="field m-t">
      <Search/>
    </div>
    <result/>

  </div>
</template>

<script>
import Search from './Search';
import Result from './Result';

export default {
  name: 'home',
  components: {
    Search,
    Result
  },
}
</script>

<style>

</style>
