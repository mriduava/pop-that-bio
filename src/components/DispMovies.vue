<template>
<div class="disp-movies">
<div class="container">
  <div class="row">
    <h1>movies</h1>
    <hr class="hr-style">
   <div class="col x12 s6 m4 l3 xl2" v-for="(movie, index) in moviesData" :key="index">
     <router-link :to="'/movies/' + movie.slug">
      <div class="card" >
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="movie.image">
        <div class="card-text">
          <h5 class="white-text text-darken-4">{{movie.title}}</h5>
          <p class="white-text text-darken-4">{{movie.showDate}} | {{movie.showTime}}</p>
        </div>
      </div>
      </div>
       </router-link> 
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
  },
  created() {
    this.$store.dispatch("getDataFromFirebase")
  },
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: borntogrille;
  src: url('../assets/fonts/borntogrille.otf');
}

.disp-movies{
  margin-top: -159px;
  padding-top: 0;
  width: 100%;
  /* background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc);  */
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #FBD3E9); 
  background: linear-gradient(to bottom, rgb(117, 9, 67), rgb(219, 166, 195));


}
.container{
  /* width: 100%; */
  padding: 0 0 5% 0;

}
.card-image{
  position: relative;
  display: flex;
  margin-top: 5%;
  min-height: 233px;
  max-height: 240px;
  border-radius: 3px;
  border: 2px solid rgb(243, 229, 236)
}

.card:hover{
  cursor: pointer;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.7);
}
.card-text{
  position: absolute;
  top: 65%;
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
  color: #fc9dd1;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
}
.hr-style{
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(left, #15026bdc, #ddd, #15026bdc);
}
</style>