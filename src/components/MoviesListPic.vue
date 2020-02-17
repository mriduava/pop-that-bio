<template>
  <div class="container">
    <div class="row film-header">
      <div class="col s4">
        <h4>Filmer (klicka poster för mer info)</h4>
      </div>

      <div class="col s8">
        <div class="sorting-option">
          <h5>
            <router-link to="/movies/"><button class="btn">
              <i class="fas fa-list"></i>
            </button></router-link>
          </h5>
          <h5>
            <button class="btn">
              <i class="far fa-file-image"></i>
            </button>
          </h5>
        </div>
      </div>
    </div>

  <div id="movies" class="disp-movies">
    <div class="container">
      <div class="row">
        <hr class="hr-style" />
        <div class="col x12 s6 m4 l3 xl3" v-for="(movie, index) in moviesData" :key="index">
          <router-link :to="'/movies/' + movie.slug">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" :src="movie.image" />
                <div class="card-text">
                  <h5 class="black-text text-darken-4 valign center">{{movie.title}}</h5>
                  <!-- <p
                    class="white-text text-darken-4 center"
                  >{{momentTime(movie.showTime.toMillis())}}</p> -->
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="end-button">
        <router-link to="/movies">
          <button class="btn waves-effect">Visa filmer i lista</button>
        </router-link>
      </div>
    </div>
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
    },
    checkChildAllowed() {},
    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug == this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    },
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
  /*display: flex;
  justify-content: space-evenly;
  border: 1px solid black;
  align-items: center;*/
}

.movies-list:hover {
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

.date {
  color: #3a3a3a;
}

.movie-text {
  color: #282828;
  padding: 0 3%;
  text-align: justify;
}
.end-button{
  text-align: center;
  padding-bottom: 20px;
}
</style>