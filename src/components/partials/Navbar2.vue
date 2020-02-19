<template>
  <div id="sticky">
    <nav class="nav-wraper">
      <div class="container">
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
          

        </ul>
      </div>
       <form @submit.prevent="search">
          <div class="input-field">
              <i class="material-icons prefix" onhover="search">search</i>
            <input
              v-model="searchInput"
              autocomplete="off"
              class="autocomplete"
              id="search"
              type="search"
              required
            />
            <label for="search"></label>
            <i class="material-icons">close</i>
            
            </div>
            </form>
    </nav>

    <ul class="sidenav" id="mobile-links">
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
       searchInput: "",
      searchInput2: "",
      isLoggedin: false,
      currentUser: false,
      logginMsg: ''
    };
  },
  methods:{
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
    }
  },
  mounted() {
    let sidenav = document.querySelectorAll(".sidenav-trigger");
    this.$M.Sidenav.init(sidenav);
    let modal = document.querySelectorAll(".modal");
    this.$M.Modal.init(modal);
    
     const autoData = this.$store.state.data.reduce((acc, curr) => {
        acc[curr.title] = null
        return acc
      }, {})

      console.log(autoData);
      
      
    var autos = document.querySelectorAll('.autocomplete');
    this.$M.Autocomplete.init(autos, {
      data: autoData,
      onAutocomplete: this.onAutocompleteSelect
    });
    var elems = document.querySelectorAll(".carousel");
    this.$M.Carousel.init(elems);
    setTimeout(this.$M.Carousel.init(elems), 1000);
    var modals = document.querySelectorAll(".modal");
    this.$M.Modal.init(modals);
    var items = document.querySelectorAll(".collapsible");
    this.$M.Collapsible.init(items);
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
  padding-left: 1.1%;
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
  font-size: 1.2rem;
  font-weight: 100;
}
li .router-link-active {
  background: rgb(150, 38, 97);
}
.our-brand-logo {
  font-family: borntogrille;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 4vw;
}
.our-brand-logo:hover {
  color: rgb(243, 144, 197);
}
form {
  position: absolute;
  padding: 0 15px;
  top: 70px;
  left: 0;
  display: inline-block;
  width: 100%;
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
  cursor: pointer;
}
.router-link-active {
  background: rgb(150, 38, 97);
}

.error {
  color: red;
  padding-bottom: 5px;
}
i.material-icons {
      vertical-align: middle;
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