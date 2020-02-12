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
            <router-link to="/">Filmer</router-link>
          </li>
          <li>
            <router-link to="/">Om oss</router-link>
          </li>
          <li v-if="!isLoggedin">
            <a href="#signin" class="modal-trigger">Logga in</a>
          </li>
          <li v-if="!isLoggedin">
            <a href="#signup" class="modal-trigger">Skapa konto</a>
          </li>
          <li v-if="isLoggedin">
            <a href="#signin" class="modal-trigger">Logga ut</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-links">
      <li>
        <router-link to="/">Filmer</router-link>
      </li>
      <li>
        <router-link to="/">Om oss</router-link>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signin" class="modal-trigger">Logga in</a>
      </li>
      <li v-if="!isLoggedin">
        <a href="#signup" class="modal-trigger">Skapa konto</a>
      </li>
      <li v-if="isLoggedin">
        <a class="modal">Logga out</a>
      </li>
    </ul>

    <div class="modal" id="signin">
      <Signin/>
    </div>

    <div class="modal" id="signup">
      <Signup/>
    </div>

  </div>
</template>

<script>
import Signin from '@/components/users/Signin2'
import Signup from '@/components/users/Signup2'
export default {
  components:{
    Signin,
    Signup
  },
  data() {
    return {
      isLoggedin: false
    };
  },
  mounted() {
    let sidenav = document.querySelectorAll(".sidenav-trigger");
    this.$M.Sidenav.init(sidenav);
    let modal = document.querySelectorAll(".modal");
    this.$M.Modal.init(modal);
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


  
</style>