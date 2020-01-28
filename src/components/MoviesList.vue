<template>
  <div class="container">
    <div class="row film-header">
      <div class="col s4">
        <h4>Filmer</h4>
      </div>

      <div class="col s8">
        <div class="sorting-option">
          <h5>
            <i class="fas fa-list"></i>
          </h5>
          <h5>
            <i class="far fa-file-image"></i>
          </h5>
        </div>
      </div>
    </div>

    <hr />

    <div v-for="(movie, index) in moviesData" :key="index">
      <router-link :to="'/movies/' + movie.slug">
      <div class="row movies-list">
        <div class="col s12 m4 l4">
          <div class="movie-image">
            <img :src="movie.image" alt="Pop that bio" />
          </div>
        </div>

        <div class="col s12 m4 l4">
          <div class="movie-info">
            <div class="title">
              <h5>{{movie.title}}</h5>
            </div>
            <div class="date">
              <p>{{momentTime(movie.showTime.toMillis())}}</p>
              <p>{{movie.genre}} | {{movie.length}} minute | {{movie.age_limit}} år</p>
            </div>
          </div>
        </div>

        <div class="col s12 m4 l4">
          <div class="movie-text">
            <h6>Om filmen:</h6>
            <p>{{movie.about | subString}}</p>
          </div>
        </div>
      </div>
        </router-link>

    </div>
  </div>
</template>


<script>
import moment from "moment";
export default {
  name: "movieslist",
  data() {
    return {
      showTrailer: false
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    dispMovieTrailer() {
      this.showTrailer = true;
    }
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
  },
  filters: {
    subString(string) {
      return string.substring(0, 110) + "... (more)";
    }
  }
};
</script>

<style lang="css">
.film-header {
  display: flex;
  justify-content: space-between;
  margin: 2% 0;
}

.film-header h4 {
  margin: 0;
  padding: 0;
}

.sorting-option {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  float: right;
}

.sorting-option h5 {
  align-items: flex-end;
  padding: 0 5px;
  margin: 0 3%;
}

.movies-list {
  margin: 3% 0;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.movies-list:hover{
  background: rgba(255, 186, 240, 0.3);
}

.movies-list:nth-child(even) {
  background-color: aqua;
}

.movie-image {
  width: 25%;
}

.movie-image img {
  width: 100%;
}

.date{
  color: #3a3a3a;
}

.movie-text{
  color: #282828;
  padding: 0 3%;
  text-align: justify;
}

</style>