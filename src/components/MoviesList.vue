<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row film-header">
        <div class="col s4 title-text">
          <h4>Filmer</h4>
        </div>
        <div class="col s8">
          <div class="sorting-option">
            <div>
              <a class="dropdown-trigger btn" href="#" data-target="dropdown1">{{ selectedGenre }}</a>
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
            <h5></h5>
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

      <transition name="movie-trailer" v-if="showTrailer" class="modal" id="modal-trailer">
        <div class="movie-trailer-container">
          <div class="movie-trailer-wrapper">
            <div class="movie-trailer-body">
              <slot name="footer">
                <i class="far fa-times-circle cross-button" @click="showTrailer = false"></i>
              </slot>
              <iframe
                width="700"
                height="480"
                :src="'https://www.youtube.com/embed/' + movieTrailer + '?autoplay=1&cc_load_policy=1'"
                frameborder="0"
                allow="autoplay"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </transition>

      <div v-for="(movie, index) in movies" :key="index">
        <router-link :to="'/movies/' + movie.slug">
          <div class="row movies-list">
            <div class="col s6 m2 l2">
              <div class="movie-image">
                <img :src="movie.image" alt="Pop that bio" />
              </div>
            </div>

            <div class="col s6 m4 l3">
              <div class="movie-info">
                <div class="title">
                  <h5>{{movie.title}}</h5>
                </div>
                <div class="date">
                  <p>{{movie.genre}} | {{movie.length}} minuter | {{movie.age_limit}} år</p>
                </div>
              </div>
            </div>

            <div class="col s12 m4 l4">
              <div class="movie-text">
                <h6>Om filmen:</h6>
                <p>{{movie.about | subString}}</p>
              </div>
            </div>

            <div class="col s12 m2 l3">
              <div class="trailer">
                <button
                  class="btn modal-trigger"
                  data-target="modal-trailer"
                  @click.stop="dispMovieTrailer($event, movie.movieTrailer)"
                >
                  <i class="far fa-play-circle"></i> Spela trailer
                </button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import M from "materialize-css";
export default {
  name: "movieslist",
  data() {
    return {
      movies: [],
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
      movieTrailer: "",
      selectedGenre: "Genre"
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    dispMovieTrailer(e, trailerUrl) {
      e.preventDefault();
      e.stopPropagation();
      this.movieTrailer = trailerUrl;
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
      this.selectedGenre = genreInput;
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
      this.movies = this.moviesData;
    }
  },
  mounted() {
    let elems = document.querySelectorAll(".dropdown-trigger");
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
    this.$M.Dropdown.init(elems, {
      alignment: "center",
      hover: true
    });
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
  },
  filters: {
    subString(string) {
      return string.substring(0, 60) + "... (more)";
    }
  }
};
</script>

<style lang="css" scoped>
.container-fluid {
  position: relative;
  top: -68px;
  padding: 2% 0 14% 0;
  background-color: rgb(235, 235, 235);
  margin-bottom: -79px;
}
.container {
  padding: 0 1%;
}
.film-header {
  display: flex;
  justify-content: space-between;
  margin: 2% 0;
}

.film-header h4 {
  color: rgb(204, 9, 113);
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
  margin: 1% 0;
  border-radius: 4px;
  background: #fff;
  border: 2px solid #ddd;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
.movies-list:hover {
  background: rgba(255, 186, 240, 0.3);
}
.movies-list:nth-child(even) {
  background-color: aqua;
}

.movie-image {
  width: 140px;
  height: 140px;
  margin: 3% 0;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
}

.date {
  color: #3a3a3a;
}

.movie-info {
  padding: 7% 0;
}
.movie-text {
  color: #282828;
  padding: 7% 0;
  text-align: justify;
}

.trailer {
  z-index: +1;
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

.trailer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.trailer .btn {
  margin-top: 20%;
}

@media (min-width: 310px) and (max-width: 568px) {
  .trailer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .trailer .btn {
    margin: 3% 0;
  }
}
</style>