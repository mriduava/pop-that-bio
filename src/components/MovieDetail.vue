<template>
  <div class="container-fluid">
    <div
      class="background"
      :style="{
          height: '90vh',
          top: '-100px',
          position: 'relative',
          width: '100%',
          backgroundColor: '#323232',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, rgba(197, 255, 209, 0.1) 90%)' + ',' +  
                      'url(\'' + movieDetail.land_image + '\')',

          backgroundPosition: 'center',
          backgroundSize: 'cover'
      }">
      <span class="play-button"><i class="far fa-play-circle"></i></span>
    </div>
    <div class="trailer-container" v-if="showTrailer">
      <iframe
        width="700"
        height="480"
        :src="'https://www.youtube.com/embed/' + movieDetail.movieTrailer"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div class="main-container">

      <div class="middle">
        <div class="poster">
          <img class="activator" :src="movieDetail.image" />
        </div>
        <div class="movie-info">
          <h4>{{ movieDetail.title }}</h4>
          <h6>{{ movieDetail.genre }}</h6>
          <h6>{{ movieDetail.length }} min | {{ movieDetail.age_limit}} år</h6>
        </div>

        <div class="ticket-button">
          <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
            <button class="btn btn-small red waves-effect">Biljetter</button>
          </router-link>
        </div>

      </div>

      <div class="last">{{ movieDetail.text }}</div>
    </div>
    <!-- <showTime /> -->
  </div>
</template>

<script>
// import ShowTime from "@/components/ShowTime";

export default {
  name: "moviedetail",
  components: {
    // ShowTime
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
    }
  },
  created() {
    this.getMovie();
  }
};
</script>

<style lang="css" scoped>
.container-fluid {
  color: white;
}

.play-button{
  z-index: +10;
  font-size: 60px;
  position: relative;
  top:50%;
  left: 50%;
  cursor: pointer;
}

.play-button:hover{
  color: #ddd;
}

.main-container {
  position: relative;
  top: -150px;
  /* height: 400px; */
  background: linear-gradient(to bottom, rgba(2, 2, 2, 0.966) 30%, rgba(20, 18, 18, 0.959), rgba(100, 100, 100, 0.6) 90%);
}

.middle {
  position: relative;
  top: -200px;
  left: 10%;
  max-width: 40vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.poster{
  width: 100px;
}

.poster img{
  width: 60%;
}
.movie-info {
  text-align: left;
}

.last {
  padding: 0 10%;
  text-align: left;
}

.poster {
  width: 30%;
}

.card {
  position: relative;
  width: 200px;
  top: -200px;
  left: 30%;
  border: 2px solid rgb(29, 255, 29);
  max-height: 297px;
  object-fit: cover;
}

.card-text {
  position: relative;
  top: -80px;
  left: 210px;
}

.description {
  margin-top: 20px;
  padding-top: 20px;
}
</style>

