<template>
  <div class="container">
    <div class="row film-header">
      <div class="col s4">
        <h4>Filmer</h4>
      </div>

      <div class="col s8">
        <div class="sorting-option">
          <div>
            <!-- Dropdown Trigger -->
            <a class="dropdown-trigger btn purple" href="#" data-target="dropdown1">{{selectedGenre}}</a>

            <!-- Dropdown Structure -->
            <ul id="dropdown1" class="dropdown-content">
              <li>
                <a @click="sortMovieList(genres.drama)" href="#!">Drama</a>
              </li>
              <li>
                <a @click="sortMovieList(genres.action)" href="#!">Action</a>
              </li>
              <li>
                <a @click="sortMovieList(genres.thriller)" href="#!">Thriller</a>
              </li>
              <li>
                <a @click="sortMovieList(genres.family)" href="#!">Familj</a>
              </li>
              <li>
                <a @click="sortMovieList(genres.comedy)" href="#!">Komedi</a>
              </li>
              <li>
                <a @click="sortMovieList(genres.all)" href="#!">Visa alla</a>
              </li>
            </ul>
          </div>

          <h5>
            <router-link to="/movies/">
              <button class="btn">
                <i class="fas fa-list"></i>
              </button>
            </router-link>
          </h5>
          <h5>
            <router-link to="/movieslistpic/">
              <button class="btn">
                <i class="far fa-file-image"></i>
              </button>
            </router-link>
          </h5>
        </div>
      </div>
    </div>

    <hr />

    <div :key="index" v-for="(movie, index) in movies">
      <!-- <div v-for="(movie, index) in moviesData" :key="index"> -->
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
                :src="'https://www.youtube.com/embed/' + movie.movieTrailer + '?autoplay=1&cc_load_policy=1'"
                frameborder="0"
                allow="autoplay"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </transition>
      <!-- <router-link :to="'/movies/' + movie.slug"> -->
      <div class="row movies-list">
        <div class="col s12 m3 l3">
          <div class="movie-image">
            <img :src="movie.image" alt="Pop that bio" />
          </div>
        </div>

        <div class="col s12 m3 l3">
          <div class="movie-info">
            <div class="title">
              <h5>{{movie.title}}</h5>
            </div>
            <div class="date">
              <!-- <p>{{momentTime(movie.showTime.toMillis())}}</p> -->
              <p>{{movie.genre}} | {{movie.length}} minuter | {{movie.age_limit}} år</p>
            </div>
          </div>
        </div>

        <div class="col s12 m3 l3">
          <div class="movie-text">
            <h6>Om filmen:</h6>
            <p>{{movie.about | subString}}</p>
          </div>
        </div>

        <div class="col s12 m3 l3">
          <div class="trailer">
            <h6>
              <button class="btn" @click="dispMovieTrailer">
                <i class="far fa-play-circle"></i> Spela trailer
              </button>
            </h6>
          </div>
        </div>
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "movieslist",
  data() {
    return {
      movies: [],
      //movies: this.moviesData,
      genres: {
        drama: "Drama",
        action: "Action",
        family: "Familj",
        comedy: "Komedi",
        thriller: "Thriller",
        all: "Alla"
      },
      showTrailer: false,
      drawer: false,
      selectedGenre: "Genre",
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

    sortMovieList(genreInput) {
      window.console.log("Sorting movies with " + genreInput);
      this.selectedGenre = genreInput

      if (genreInput == "Alla") {
        this.movies = this.moviesData;
        return;
      }

      let sortedMovies = this.moviesData.filter(
        movie => movie.genre == genreInput
      );
      window.console.log(sortedMovies);
      this.movies = sortedMovies;
    }
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  watch: {
    moviesData() {
      window.console.log("MOVIES UPDATED ")
      this.movies = this.moviesData
    }
  },
  mounted() {
    let elems = document.querySelectorAll(".dropdown-trigger");
    this.$M.Dropdown.init(elems, {
      alignment: "center",
      hover: true
    });
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
    //this.movies = this.moviesData;
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
</style>