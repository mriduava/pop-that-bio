<template>
  <div class="home">
      <Carousel/>
      <DispMovies/>
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
