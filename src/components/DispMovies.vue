<template>
<div class="container">
  <hr class="hr-style">
  <div class="row" >
   <div class="col x12 s6 m4 l3" v-for="(movie, index) in moviesData" :key="index">
    <div class="card" >
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="movie.image">
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{movie.title}}<i class="material-icons right">close</i></span>
        <p>{{movie.text}}</p>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'movies',
  data(){
    return {
      movies: []
    }
  },
  computed: {
    moviesData(){
      return this.$store.state.data;
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc); 
}

.card{
  display: flex;
  margin-top: 5%;
  border: 1px solid #ddd;
}

.card:hover{
  cursor: pointer;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.7);
}

.hr-style{
  border: 0;
  height: 1px;
  background: #fff;
  background-image: linear-gradient(left, #15026bdc, #ddd, #15026bdc);
}
</style>