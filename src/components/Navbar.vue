<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav class="nav-extended">
      <div class="nav-wrapper">
      <!-- <form @submit.prevent="search">
        <div class="input-field">
          <input v-model="searchInput" class="autocomplete" id="search" type="search" required>
          <label for="search"></label>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form> -->
        <a href="#!" class="our-brand-logo" @click="goToStart">POP THAT BIO</a> 
        
        <router-link to="/">
          <div class="brand-logo"></div>
        </router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="fas fa-align-justify"></i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn==false">
            <div class="nav-link modal-trigger account-button" data-target="modal-login">LOGGA IN</div>
          </li>
          <li class="nav-item" v-if="isLoggedIn==false">
            <div class="nav-link modal-trigger account-button" data-target="modal-signup">SKAPA KONTO</div>
          </li>
          <li class="logged-in" v-if="isLoggedIn">
            <div class="nav-link" id="logout account-button" @click="logOut">LOGGA UT</div>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/mypage">
        <i class="large material-icons white-text text-grey lighten-5">account_circle</i>
      </router-link>
      </li>
        </ul>
        
      </div>
    </nav>

    <!-- SIGN UP MODAL -->
    <div id="modal-signup" class="modal">
      <div class="modal-content">
        <h4>Skapa konto</h4>
        <br />
        <form id="signup-form">
          <div class="input-field">
            <input v-model="name"  type="text" id="signup-name" required />
            <label for="signup-name">Namn</label>
          </div>
          <div class="input-field">
            <input v-model="email"  type="email" id="signup-email" required />
            <label for="signup-email">E-post adress</label>
          </div>
          <div class="input-field">
            <input v-model="password" type="password" id="signup-password" required />
            <label for="signup-password">Välj lösenord</label>
          </div>
          <button class="btn darken-2 z-depth-0" @click="signUp">Skapa konto</button>
        </form>
      </div>
    </div>

    <!-- LOGIN MODAL -->
    <div id="modal-login" class="modal">
      <div class="modal-content">
        <h4>Logga in</h4>
        <br />
        <form id="login-form">
          <div class="input-field">
            <input v-model="email" type="email" id="login-email" required />
            <label for="login-email">E-post adress</label>
          </div>
          <div class="input-field">
            <input v-model="password" type="password" id="login-password" required />
            <label for="login-password">Ditt lösenord</label>
          </div>
          <button class="btn darken-2 z-depth-0" @click.prevent="logIn">Logga in</button>
        </form>
      </div>
    </div>

    <ul class="sidenav" id="mobile-demo">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <router-link to="/mypage">
        <i class="large material-icons white-text text-grey lighten-5">account_circle</i>
      </router-link>
      <li class="nav-item">
        <router-link to="/">
          <a class="brand-logo">
            <p class="white-text text-grey lighten-5">HEM</p>
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/movies" class="nav-link">
          <p class="white-text text-grey lighten-5">FILMER</p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          <p class="white-text text-grey lighten-5">OM OSS</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/medlemmar" class="nav-link">
          <p class="white-text text-grey lighten-5">Medlemmar</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/q-and-a" class="nav-link">
          <p class="white-text text-grey lighten-5">Frågor och svar</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/kundservice">
          <p class="white-text text-grey lighten-5">Kundservice</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signin">
          <p class="white-text text-grey lighten-5">LOGGA IN</p>
        </router-link>
      </li>
    </ul>
  </div>
</template> 

<script>
import {aut} from '@/firebase/firebase.js'
export default {
  data() {
    return {
      searchInput: '',
      email: '',
      password: '',
      name: '',
      isLoggedIn: false
    }
  },
  mounted() {

      const autoData = {
        aladdin: null,

        "frozen 2":
          "https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png",

        legend: null,

        "the matrix": null,

        avatar:
          "https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png",

        "unga astrid": null,

        djungelboken: null,

        "micke och veronica": null,

        filmer: null,

        "om oss": null,

        "logga in": null,

        hem: null
      }
    let autos = document.querySelectorAll('.autocomplete');
    this.$M.Autocomplete.init(autos, {
      data: autoData,
      onAutocomplete: this.onAutocompleteSelect
    });

    let elems = document.querySelectorAll(".carousel");
    this.$M.Carousel.init(elems);
    setTimeout(this.$M.Carousel.init(elems), 1000);

    let modals = document.querySelectorAll(".modal");
    this.$M.Modal.init(modals);

    let items = document.querySelectorAll(".collapsible");
    this.$M.Collapsible.init(items);
  },
  methods: {
    onAutocompleteSelect(value) {
      this.searchInput = value
    },
    search() {
      window.console.log(this.searchInput);
      if (this.searchInput == "aladdin") {
        this.$router.push("/movies/aladdin");
      } else if (this.searchInput == "frozen 2") {
        this.$router.push("/movies/frozen-2");
      } else if (this.searchInput == "legend") {
        this.$router.push("/movies/legend");
      } else if (this.searchInput == "the matrix") {
        this.$router.push("/movies/the-matrix");
      } else if (this.searchInput == "avatar") {
        this.$router.push("/movies/avatar");
      } else if (this.searchInput == "unga astrid") {
        this.$router.push("/movies/astrid");
      } else if (this.searchInput == "djungelboken") {
        this.$router.push("/movies/jungle-book");
      } else if (this.searchInput == "micke och veronica") {
        this.$router.push("/movies/micke-och-veronica");
      } else if (this.searchInput == "filmer") {
        this.$router.push("/movies");
      } else if (this.searchInput == "om oss") {
        this.$router.push("/about");
      } else if (this.searchInput == "logga in") {
        this.$router.push("/signin");
      } else if (this.searchInput == "hem") {
        this.$router.push("/");
      }
    },
  
     
    storeAccountDetails() {
      let accountInfo = {
        name: this.name,
        email: this.email,
        collection: "accounts"
      };

      this.$store.dispatch("sendToFirebase", accountInfo);
    },
     async signUp(e) {
      aut
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            window.console.log(`Account created for ${user.email}`)
            this.storeAccountDetails();
            this.$router.push("/mypage");
            const modal = document.querySelector("#modal-signup");
            this.$M.Modal.getInstance(modal).close();
            this.email = "";
            this.password = "";
          },
          err => {
            window.console.log(err.message)
          }
        );

      e.preventDefault();
    },
    async logIn(e){
      e.preventDefault();
      await aut
        .signInWithEmailAndPassword(this.email, this.password).catch(err => {
          window.console.log(err)
          return
        })
        this.$store.dispatch('setUsername', this.email)
        this.$router.push("/mypage");
        window.console.log('u are logged in')
        this.isLoggedIn = true
        /*
        const modal = document.querySelector('#modal-login')
            this.M.Modal.getInstance(modal).close()
            this.email = ''
            this.password = ''
            */
    },
    async logOut(e){
      aut
        .signOut()
        .then(
          () => {
            window.console.log("u logged out");
            this.$router.push("/");
            this.isLoggedIn = false
          },
          err => {
            window.console.log(err.message)
          }
        );

      e.preventDefault();
    },
    goToStart(){
      this.$router.push("/");
    }
  }
};
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
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}



.account-button {
  padding: 0 10px;
}

.sidenav {
  background-color: rgba(107, 22, 72, 0.788);
}

.brand-logo {
  font-family: borntogrille;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
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