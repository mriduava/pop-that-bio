<template>
  <div id="sticky">
    <nav class="nav-wraper">
      <div class="container">

        <!-- sökfält
        <form @submit.prevent="search">
          <div class="input-field">
            <input
              v-model="searchInput"
              autocomplete="off"
              class="autocomplete"
              id="search"
              type="search"
              required
            />
            <label for="search"></label>
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form> -->

        <a class="brand-logo">
          <router-link to="/">POP THAT BIO</router-link>
        </a>
        <a class="sidenav-trigger" data-target="mobile-links">
          <i class="fas fa-bars"></i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/movies">FILMER</router-link>
          </li>
          <li>
            <router-link to="/about">OM OSS</router-link>
          </li>
          <li v-if="!isLoggedin">
            <a href="#signin" class="modal-trigger">LOGGA IN</a>
          </li>
          <li v-if="!isLoggedin">
            <a href="#signup" class="modal-trigger">SKAPA KONTO</a>
          </li>
          <li>
            <router-link to="/minasidor" v-if="isLoggedin">MINA SIDOR</router-link>
          </li>
          <li v-if="isLoggedin">
            <a href="#signin" class="modal-trigger" @click.prevent="logout">LOGGA UT</a>
          </li>

            <!-- NEW SEARCH FIELD-->
             <!-- <div class="input-field search-field">
              <input id="search" type="search" v-model="searchMessage" v-on:keyup.enter="searchMovie(searchMessage)" required>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>  -->
          

        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-links">
      <li>
        <router-link to="/">HEM</router-link>
      </li>
      <li>
        <router-link to="/movies">FILMER</router-link>
      </li>
      <li>
        <router-link to="/about">OM OSS</router-link>
      </li>
      <li v-if="isLoggedin">
        <router-link to="/minasidor">MINA SIDOR</router-link>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signin" class="modal-trigger">LOGGA IN</a>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signup" class="modal-trigger">SKAPA KONTO</a>
      </li>
      <li v-if="isLoggedin">
        <a class="modal" @click.prevent="logout">LOGGA UT</a>
      </li>
    </ul>

    <div class="modal grey lighten-4" id="signin">
      <Signin v-on:close="closeModal($event)"/>
    </div>

    <div class="modal grey lighten-4" id="signup">
      <Signup v-on:close="closeModal($event)"/>
    </div>

  </div>
</template>

<script>
import Signin from '@/components/users/Signin2'
import Signup from '@/components/users/Signup2'
import firebase from 'firebase'
export default {
  components:{
    Signin,
    Signup
  },
  data() {
    return {
      isLoggedin: false,
      currentUser: false,
      logginMsg: '',
      searchMessage: '',
      searchedMovieList: [],
    };
  },
  methods:{
    logout(){
      firebase.auth().signOut()
      .then(()=>{
        this.isLoggedin = false;
        this.$store.state.userId = null;
        this.$router.push({ path: '/' });
      })
    },
    closeModal(event){
      this.logginMsg = event
      this.isLoggedin = true;
    },
    closeSignin(){
      if(this.isLoggedin){
        let modal = document.querySelector("#signin");
        this.$M.Modal.getInstance(modal).close();
      }
    },
    closeSignup(){
      if(this.isLoggedin){
        let modal = document.querySelector("#signup");
        this.$M.Modal.getInstance(modal).close();
      }
    },
     
     searchMovie(input) {

       this.moviesData.forEach(movie => {

         let movieTitle = movie.title.toLowerCase()
         let searched = input.toLowerCase()

         //if (movieTitle === searched || movieTitle.includes(searched)) {
        if (movieTitle === searched) {
          window.console.log("Match")
            window.console.log(movie.title)
         } else if (movieTitle.startsWith(searched)) {
           window.console.log("Starts")
            window.console.log(movie.title)
         } else if (movieTitle.includes(searched)) {
           window.console.log("inclu")
            window.console.log(movie.title)
         }
       });
    },
  },
  onAutocompleteSelect(value) {
      this.searchInput = value;
    },
    myFunction: function () {	
		this.searchInput2 = this.searchInput.toUpperCase();
    },
   
    search() {
      window.console.log(this.searchInput);
      this.searchInput2 = this.searchInput.toUpperCase();
      this.searchInput = this.searchInput[0].toUpperCase() + this.searchInput.slice(1)
      this.$router.push("/movies/" + this.searchInput.replace(" ", "-"));     
      
     
       if (this.searchInput == "Filmer") {
         this.$router.push("/movies");
       } else if (this.searchInput == "Om oss") {
         this.$router.push("/about");
       } else if (this.searchInput == "Logga in") {
         this.$router.push("/signin");
       } else if (this.searchInput == "Start") {
       this.$router.push("/");
       }
    },
  mounted() {
    let sidenav = document.querySelectorAll(".sidenav-trigger");
    this.$M.Sidenav.init(sidenav);
    let modal = document.querySelectorAll(".modal");
    this.$M.Modal.init(modal);
    
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  watch: {
    'isLoggedin'(){
      this.closeSignin()
      this.closeSignup()
    }
  },
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: borntogrille;
  src: url("../../assets/fonts/borntogrille.otf");
}

nav {
  background: transparent;
  padding-left: 0.9%;
  box-shadow: none;
  z-index: 2;
	position: fixed;
  top: 0;
  width: 100%;
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
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
}
.brand-logo {
  font-family: borntogrille;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
.modal{
  max-width: 400px;
  padding: 2% 0;
}
li a{
  font-size: 1.1rem;
  font-weight: 100;
}
li .router-link-active {
  background: rgb(150, 38, 97);
}
.search-field {
  margin: 0px;
  display: flex;
  align-items: flex-end;
  width: 150px;
}
.input-field {
  width: 150px;
}

@media (max-width: 568px) {
 .brand-logo{
  font-size: 1.8rem;
 }
}

</style>