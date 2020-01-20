<template>
  <div>
    <h3>Book Tickets</h3>
    <!--<h3>{{ movieDetail.title }}</h3>-->
    <hr />
    <h3>Saloon 1</h3>
    <!-- Drop down (todays date, and 4 days forward) -->
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
    </div>
    <h4>
      16:45
      <button>Book This Time!</button>
    </h4>
    <h3>Saloon 2</h3>
  </div>
</template>

<script>
export default {
  name: "showtime",
  data() {
    return {
      movie: this.$store.state.data,
      movieDetail: []
    };
  },
  methods: {
    getMovie() {
      this.movie.forEach(e => {
        if (e.slug == this.$route.params.slug) {
          this.movieDetail = e;
        }
      });
    }
  },
  created() {
    this.getMovie();
  }
};
</script>

<style scoped>
.dropbtn {
  background-color: cadetblue;
  color: darkcyan;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rebeccapurple;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0 px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>