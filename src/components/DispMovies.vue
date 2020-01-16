<template>
<div class="container">
  <div class="row">
    <h1>movies</h1>
    <hr class="hr-style">
   <div class="col x12 s6 m4 l3" v-for="(movie, index) in moviesData" :key="index">
    <div class="card" >
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="movie.image">
        <div class="card-text">
          <h5 class="white-text text-darken-4">{{movie.title}}</h5>
          <p class="white-text text-darken-4">{{movie.showDate}} | {{movie.showTime}}</p>
        </div>
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
@font-face {
  font-family: borntogrille;
  src: url('../assets/fonts/borntogrille.otf');
}

.container{
  width: 100%;
  padding: 0 0 5% 0;
}

.card-image{
  position: relative;
  display: flex;
  margin-top: 5%;
  border: 1px solid #ddd;
}

.card:hover{
  cursor: pointer;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.7);
}

.card-text{
  position: absolute;
  top: 75%;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(29, 106, 154, 0.05), rgb(23, 56, 148));
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: .5s ease;
}

.card-image:hover .card-text{
  visibility: visible;
  opacity: 1;
}

h1{
  font-family: borntogrille;
  padding-top: 3%;
  color: #3fefff;
}

.hr-style{
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(left, #15026bdc, #ddd, #15026bdc);
}
</style>