<template>
  <div class="home">
    <div class="slide">
       <Carousel/>
    </div>
    <div class="movies">
      <DispMovies/>
    </div>      
  </div>
</template>

<script>
import DispMovies from '@/components/movies/DispMovies.vue'
import Carousel from '@/components/partials/Carousel.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    DispMovies
  }
}
</script>

<style lang="css" scoped>

.home{
  position: relative;
  top: -120px;
}

  
</style>
