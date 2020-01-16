<template>
  <div>
    <h2>{{dispMovie}} This is movie details page</h2>
  </div>
</template>

<script>
export default {
  name: 'moviedetails',
  computed: {
    dispMovie(){
      return this.$route.params.movieid
    }
  }  
}
</script>

<style lang="scss" scoped>
  
</style>