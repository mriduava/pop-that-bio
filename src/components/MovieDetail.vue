<template>

<h1>HELLO WORLD</h1>
</template>

<script>
export default {
  name: 'moviedetail',

computed: {
  moviesData(){
    return this.$store.state.data
  }
}
}
</script>

