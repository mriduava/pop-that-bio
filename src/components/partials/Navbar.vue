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
            <router-link to="/mypage" v-if="isLoggedin">MINA SIDOR</router-link>
          </li>
          <li v-if="isLoggedin">
            <a href="#signin" class="" @click.prevent="logout">LOGGA UT</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-links">
      <router-link to="/mypage">
        <i
          class="avatar large material-icons white-text text-grey lighten-5"
          v-if="isLoggedin"
        >account_circle</i>
        <p class="white-text text-grey lighten-5 user-email" v-if="isLoggedin">{{logginMsg}}</p>
      </router-link>
      <li>
        <router-link to="/" class="click overflow: hidden white-text text-grey lighten-5">HEM</router-link>
      </li>
      <li>
        <router-link to="/movies" class="white-text text-grey lighten-5">FILMER</router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link">
          <p class="white-text text-grey lighten-5">OM OSS</p>
        </router-link>
      </li>
      <li v-if="isLoggedin">
        <router-link to="/mypage" class="white-text text-grey lighten-5">MINA SIDOR</router-link>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signin" class="modal-trigger white-text text-grey lighten-5">LOGGA IN</a>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signup" class="modal-trigger white-text text-grey lighten-5">SKAPA KONTO</a>
      </li>
      <li v-if="isLoggedin">
        <a class="white-text text-grey lighten-5" @click.prevent="logout">LOGGA UT</a>
      </li>
    </ul>

    <div class="modal grey lighten-4" id="signin">
      <Signin v-on:close="closeModal($event)" />
    </div>

    <div class="modal grey lighten-4" id="signup">
      <Signup v-on:close="closeModal($event)" />
    </div>
  </div>
</template>

<script>
import Signin from "@/components/users/Signin";
import Signup from "@/components/users/Signup";
import firebase from "firebase";
export default {
  components: {
    Signin,
    Signup
  },
  data() {
    return {
      isLoggedin: false,
      currentUser: false,
      logginMsg: ""
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isLoggedin = false;
          this.$store.state.userId = null;
          this.$router.push({ path: "/" });
        });
    },
    closeModal(event) {
      this.logginMsg = event;
      this.isLoggedin = true;
    },
    closeSignin() {
      if (this.isLoggedin) {
        let modal = document.querySelector("#signin");
        this.$M.Modal.getInstance(modal).close();
      }
    },
    closeSignup() {
      if (this.isLoggedin) {
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
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  watch: {
    isLoggedin() {
      this.closeSignin();
      this.closeSignup();
    }
  }
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
.modal {
  max-width: 400px;
  padding: 2% 0;
}
li a {
  font-size: 1.1rem;
  font-weight: 100;
}
li .router-link-active,
.sidenav {
  background: linear-gradient(
    to right,
    rgb(117, 9, 67),
    rgba(197, 49, 99, 0.5)
  );
}
.avatar {
  margin-top: 10%;
}
.user-email {
  padding-left: 16%;
}
@media (max-width: 768px) {
  .sidenav {
    width: 60vw;
  }
}

@media (max-width: 568px) {
  .brand-logo {
    font-size: 1.8rem;
  }
  .sidenav {
    width: 50vw;
  }
}
</style>
