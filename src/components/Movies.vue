<template>
  <div class="bg-movie-list pb-5">
    <h1 class="text-center pt-5">movies</h1>
        <hr class="hr-style">
     <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch" v-for="(movie) in moviesData" :key="movie.id">
          <router-link :to="'/movies/' + movie.id">
          <div class="card">
            <div class="movie-image">
              <img :src="movie.image" class="card-img-top croped" alt="mriduava-image">
            </div>
            <!-- <div class="card-body">
              <h5 class="card-title">{{ movie.title }}</h5>
              <p class="card-text">{{ movie.text.substring(0,100) }}</p>
              <h5 class="price float-right text-primary"> Kr</h5>
            </div> -->
            <!-- <div class="card-footer bg-light"></div> -->
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
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Mriduava;
  src: url('../../public/fonts/Filmstrip.otf');
}
.card{
  display: flex;
  margin-top: 5%;
  .movie-image{
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    .movie-image img{
      border-radius: 15px;
    }
  }
}
.bg-movie-list{
  background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc); 
}
.hr-style{
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(left, #15026bdc, #ddd, #15026bdc);
}
.card:hover{
  cursor: pointer;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.7);
}
h1{
  font-family: Mriduava;
  font-size: 5.5em;
  font-weight: 100;
  color: rgba($color: #ccceee, $alpha: 0.9);  
}
</style>