<template>
  <div class="home">
      <DispMovies/>
  </div>
</template>

<script>
import DispMovies from '@/components/DispMovies.vue'

export default {
  name: 'home',
  components: {
    DispMovies
  }
}
</script>

<style lang="css">
.home{
  background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc); 
}
</style>
