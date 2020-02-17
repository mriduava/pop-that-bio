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
      logginMsg: ''
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
    }
  },
  mounted() {
    let sidenav = document.querySelectorAll(".sidenav-trigger");
    this.$M.Sidenav.init(sidenav);
    let modal = document.querySelectorAll(".modal");
    this.$M.Modal.init(modal);
    
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

</style>