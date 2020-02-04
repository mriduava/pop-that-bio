<template>
  <div id="movies" class="disp-movies">
    <div class="container">
      <div class="row">
        <h1>movies</h1>
        <hr class="hr-style" />
        <div class="col x12 s6 m4 l3 xl3" v-for="(movie, index) in moviesData" :key="index">
          <router-link :to="'/movies/' + movie.slug">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" :src="movie.image" />
                <div class="card-text">
                  <h5 class="white-text text-darken-4 valign center">{{movie.title}}</h5>
                  <p
                    class="white-text text-darken-4 center"
                  >{{momentTime(screenings.showTime.toMillis())}}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="end-button">
        <router-link to="/movies">
          <button class="btn waves-effect">Visa alla filmer</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "movies",
  data() {
    return {
      movies: [],
      screenings: []
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    }
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
    this.$store.dispatch("getScreeningFromFirebase");
  }
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: borntogrille;
  src: url("../assets/fonts/borntogrille.otf");
}

.end-button {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.btn {
  background: rgba(202, 8, 112, 0.692);
}

.disp-movies {
  margin-top: -199px;
  padding-top: 5%;
  width: 100%;
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(
    to botttom,
    rgba(156, 36, 100, 0.9),
    #fbd3e9
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.01) 1%,
    rgba(117, 9, 67, 1) 5%,
    rgba(219, 166, 195, 0.99) 100%
  );
}
.container {
  padding: 0 0 5% 0;
}
.card-image {
  position: relative;
  display: flex;
  margin-top: 5%;
  min-height: 233px;
  border-radius: 3px;
  border: 2px solid rgb(243, 229, 236);
}

.card:hover {
  cursor: pointer;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.7);
}
.card-text {
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(29, 106, 154, 0.01) 5%,
    rgba(117, 9, 67, 0.9) 65%
  );
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s ease;
}
.card-image:hover .card-text {
  visibility: visible;
  opacity: 1;
}
h1 {
  text-align: center;
  font-family: borntogrille;
  color: #fc9dd1;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
}
.hr-style {
  border: 0;
  height: 1px;
  margin: 0 0 10px 0;
  background: #fff;
  background-image: -webkit-linear-gradient(
    left,
    rgba(133, 23, 81, 0.9),
    #ddd,
    rgba(133, 23, 81, 0.9)
  );
}
</style>