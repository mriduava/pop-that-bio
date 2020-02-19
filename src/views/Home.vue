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

</style>
