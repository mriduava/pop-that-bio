<template>
  <div class="main">
    <div class="main-container">
      <div class="trailer-container">
        <iframe
          width="700"
          height="480"
          :src="'https://www.youtube.com/embed/' + movieDetail.movieTrailer"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="middle">
        <div class="poster">
          <img class="activator" :src="movieDetail.image" />
        </div>
        <div class="movie-info">
          <h4>{{ movieDetail.title }}</h4>
          <h6>{{ movieDetail.genre }}</h6>
          <h6>{{ movieDetail.length }} min | {{ movieDetail.age_limit}} år</h6>
        </div>
        <div>
          <router-link :to="'/book-ticket/' + movies.slug">
            <button class="btn red waves-effect">Biljetter</button>
          </router-link>
        </div>
      </div>
      <div class="last">{{ movieDetail.text }}</div>
    </div>
    <showTime />
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
      movieDetail: []
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
.main {
  background-color: black;
  color: white;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding-top: 50px;
}

.middle {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
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

