<template>
  <div class="container-fluid">
    <div
      class="background"
      :style="{
          height: '100vh',
          top: '-65px',
          position: 'relative',
          width: '100%',
          backgroundColor: '#323232',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, rgba(197, 255, 209, 0.1) 90%),' +  
                      'url(\'' + movieDetail.land_image + '\')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
      }"
    ></div>

    <transition name="movie-trailer" v-if="showTrailer">
      <div class="movie-trailer-container">
        <div class="movie-trailer-wrapper">
          <div class="movie-trailer-body">
            <slot name="footer">
              <i class="far fa-times-circle cross-button" @click="showTrailer = false"></i>
            </slot>
            <iframe
              width="700"
              height="480"
              :src="'https://www.youtube.com/embed/' + movieDetail.movieTrailer + '?autoplay=1&cc_load_policy=1'"
              frameborder="0"
              allow="autoplay"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>

    <div class="moviedetail-container">
      <div class="row middle">
        <div class="col s6 movie-image">
          <img :src="movieDetail.image" />
        </div>

        <div class="col s4 movie-info">
          <span class="play-button">
            <i @click="dispMovieTrailer" class="far fa-play-circle"></i>
          </span>
          <h5>{{ movieDetail.title }}</h5>
          <p>{{ movieDetail.genre }}</p>
          <p>{{ movieDetail.length }} min | {{ movieDetail.age_limit}} år</p>
        </div>

        <div class="col s2 ticket-button">
          <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
            <button class="btn btn-small waves-effect" @click.prevent="scrollTo('#showtime')">Biljetter</button>
          </router-link>
        </div>
      </div>

      <div class="row movie-text-row">
        <div class="col s8 movie-text">
          <p>{{ movieDetail.about }}</p>
        </div>
      </div>
    </div>

    <div class="showtime-comp">
      <ShowTime />
    </div>

  </div>
</template>

<script>
import ShowTime from "@/components/ShowTime";

export default {
  name: "moviedetail",
  components: {
    ShowTime
  },
  data() {
    return {
      movies: this.$store.getters.movies,
      movieDetail: [],
      showTrailer: false
    };
  },
  methods: {
    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug == this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    },
    dispMovieTrailer() {
      this.showTrailer = true;
    },
    scrollTo(selector){
      document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
    }
  },
  
  created() {
    this.getMovie();
  }
};
</script>

<style lang="css" scoped>

.container-fluid{
  color: rgb(253, 251, 255);
  padding: 1% 0;
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
  background: linear-gradient(to bottom, rgb(20, 19, 20), rgb(219, 166, 195));
}
.moviedetail-container {
  position: relative;
  top: -130px;
  background: linear-gradient(
    to bottom,
    rgba(2, 2, 2, 0.966) 30%,
    rgba(20, 18, 18, 0.959),
    rgba(219, 166, 195, 0.1) 90%
  );
}

.btn{
  background: rgb(230, 12, 128);
}

.middle {
  position: relative;
  top: -180px;
  width: 60vw;
}

.movie-image {
  min-width: 140px;
  max-width: 210px;
  position: relative;
  top: -91px;
}

.movie-image img {
  width: 100%;
  border: 2px solid #ddd;
}
.movie-info {
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.play-button {
  z-index: +1;
  padding-top: 14px;
  font-size: 50px;
  font-weight: 100;
}

.play-button i:hover {
  cursor: pointer;
  color: rgb(85, 253, 93);
}

.ticket-button {
  position: relative;
  top: 146px;
}

.movie-trailer-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.movie-trailer-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.movie-trailer-body {
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: rgb(3, 3, 3);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

iframe {
  width: 100%;
  height: 100%;
  position: relative;
  top: -25px;
}

.cross-button {
  position: relative;
  top: 0px;
  font-size: 30px;
  color: rgb(231, 13, 86);
  float: right;
  z-index: 10;
}

.cross-button:hover {
  cursor: pointer;
  color: rgb(247, 158, 188);
}

.movie-trailer-enter {
  opacity: 0;
}

.movie-trailer-leave-active {
  opacity: 0;
}

.movie-trailer-enter .movie-trailer-body,
.movie-trailer-leave-active .movie-trailer-body {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.movie-text-row{
  display: flex;
  width: 90vw;
}

.movie-text {
  color: #fff;
  position: relative;
  top: -250px;
  left: 50%;
  text-align: justify;
  margin: 0 auto;
  justify-content: center;
}
.movie-text p{
  font-size: 1.1rem;
}
.showtime-comp{
  background: linear-gradient(
    to top,
    rgba(2, 2, 2, 0.966) 10%,
    rgba(20, 18, 18, 0.959),
    rgba(20, 18, 18, 0.959), 100%
  );
  position: relative;
  margin: 0 auto; 
  top: -350px; 
  border-top: 0.01rem solid rgba(65, 65, 65, 0.5);
  width: 59vw;
  height: 10vh;
}
/* RESPONSIVE STYLE*/
@media (min-width: 1281px) {
}
@media (min-width: 1025px) and (max-width: 1280px) {
}
@media (min-width: 768px) and (max-width: 1024px) {
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}
@media (min-width: 481px) and (max-width: 767px) {
  
}
@media (min-width: 310px) and (max-width: 812px) {
  .middle {
    position: relative;
    top: -190px;
    width: 90vw;
  }
  .movie-image {
    top: -80px;
  }
  .movie-info {
    position: relative;
    top: -80px;
  }
  .ticket-button {
    position: absolute;
    margin-top: 1%;
  }
  .ticket-button button{
    width: 85vw;
  }
  .movie-text-row{
    width: 100vw;
  }
  .movie-text{
    width: 95vw;
    top: -220px;
    left: 0;
  }
  .movie-trailer-body {
    width: 95vw;
    height: 40vh;
  }
  .showtime-comp{
    width: 85vw;
  }
}

</style>

