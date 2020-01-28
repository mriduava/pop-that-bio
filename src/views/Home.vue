<template>
  <div class="home">
      <Carousel/>
      <DispMovies/>
  </div>
</template>

<script>
import DispMovies from '@/components/DispMovies.vue'
import Carousel from '@/components/Carousel.vue'


export default {
  name: 'home',
  components: {
    Carousel,
    DispMovies
  },
  methods: {
    
  }
}
</script>

<style lang="css">
/* .home{
  background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc); 
} */
</style>
