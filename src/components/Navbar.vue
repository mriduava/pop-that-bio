<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <form @submit.prevent="search">
        <div class="input-field">
          <input v-model="searchInput" id="search" type="search" required>
          <label for="search"></label>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
        <a href="#!" class="our-brand-logo">POP THAT BIO</a>
        <ul class="right">
          <li class="nav-item">
            <router-link to="/movies" class="nav-link">Filmer</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">Om Oss</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/signin">Logga In</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    }
  }, 
  methods: {
    search() {
      window.console.log(this.searchInput)
      if (this.searchInput == 'aladdin') {
        this.$router.push('/movies/aladdin')
      }
      else if (this.searchInput == 'frozen 2') {
        this.$router.push('/movies/frozen-2')
      }
      else if (this.searchInput == 'legend') {
        this.$router.push('/movies/legend')
      }
      else if (this.searchInput == 'the matrix') {
        this.$router.push('/movies/the-matrix')
      }
      else if (this.searchInput == 'avatar') {
        this.$router.push('/movies/avatar')
      }
      else if (this.searchInput == 'unga astrid') {
        this.$router.push('/movies/astrid')
      }
      else if (this.searchInput == 'djungelboken') {
        this.$router.push('/movies/jungle-book')
      }
      else if (this.searchInput == 'micke och veronica') {
        this.$router.push('/movies/micke-och-veronica')
      }
      else if (this.searchInput == 'filmer') {
        this.$router.push('/movies')
      }
      else if (this.searchInput == 'om oss') {
        this.$router.push('/about')
      }
      else if (this.searchInput == 'logga in') {
        this.$router.push('/signin')
      }
      else if (this.searchInput == 'hem') {
        this.$router.push('/')
      }
    },
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: borntogrille;
  src: url("../assets/fonts/borntogrille.otf");
}

nav {
  padding: 0 14.8%;
  border-bottom: 1px solid rgb(213, 187, 47);
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(
    to top,
    rgb(156, 36, 100),
    rgba(197, 49, 99, 0.5)
  );
  background: linear-gradient(
    to bottom,
    rgb(117, 9, 67),
    rgba(197, 49, 99, 0.5)
  );
}

.our-brand-logo {
  font-size: 2.5rem;
  padding-left: 1.5%;
  font-family: borntogrille;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.our-brand-logo:hover {
  color: rgb(243, 144, 197);
}

@media (max-width: 460px) {
  .our-brand-logo {
    font-size: 5vw;
  }
}

#nav-mobile .nav-item .nav-link {
  font-size: 1.2em;
}
.nav-link:hover {
  color: rgb(243, 144, 197);
}

.router-link-active {
  background: rgb(150, 38, 97);
}

/* RESPONSIVE */
@media (min-width: 1281px) {
}

@media (min-width: 1025px) and (max-width: 1280px) {
}

@media (min-width: 768px) and (max-width: 1024px) {
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}

@media (min-width: 481px) and (max-width: 767px) {
  nav {
    padding: 0;
  }
  .brand-logo {
    font-size: 2rem;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  nav {
    padding: 0;
  }
  .brand-logo {
    font-size: 1.9rem;
  }
}
</style>