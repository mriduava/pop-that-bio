<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav  class="nav-extended">
    <div class="nav-wrapper">
        <router-link to="/"><a class="brand-logo "><p>POP THAT BIO</p></a></router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

         <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>
        <li class="nav-item">
            <div class="nav-link modal-trigger" data-target="modal-login">LOGGA IN</div>
          </li>
          <li class="nav-item">
            <div class="nav-link modal-trigger" data-target="modal-signup">SKAPA KONTO</div>
          </li>
      
      </ul>
    </div>
  </nav>


  <!-- SIGN UP MODAL -->
  <div id="modal-signup" class="modal">
    <div class="modal-content">
      <h4>Sign up</h4><br />
      <form id="signup-form">
        <div class="input-field">
          <input type="email" id="signup-email" required />
          <label for="signup-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="signup-password" required />
          <label for="signup-password">Choose password</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
      </form>
    </div>
  </div>

  <!-- LOGIN MODAL -->
  <div id="modal-login" class="modal">
    <div class="modal-content">
      <h4>Login</h4><br />
      <form id="login-form">
        <div class="input-field">
          <input type="email" id="login-email" required />
          <label for="login-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="login-password" required />
          <label for="login-password">Your password</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Login</button>
      </form>
    </div>
  </div>

  <ul class="sidenav" id="mobile-demo">
    <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

         <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
          </li>
  </ul>
  <!--  <nav class="nav-extended">
      <div class="nav-wrapper">
        <router-link to="/"><a class="brand-logo "><p>POP THAT BIO</p></a></router-link>
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
          </li>
        </ul>
         <ul class="side-nav" id="mobile-demo">
         <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
          </li>
      </ul>
      </div>
    </nav>-->
  </div>
</template>
<script>
export default {
  mounted() {
    
    var elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems);

 
    

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
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), rgba(197, 49, 99, 0.5));
  background: linear-gradient(to bottom, rgb(117, 9, 67), rgba(197, 49, 99, 0.5));
   text-shadow: 2px 4px 1px rgb(12, 1, 1);
  font-family: borntogrille;

  }

.our-brand-logo {
  font-size: 2.5rem;
  padding-left: 1.5%;
  font-family: borntogrille;
   text-shadow: 1px 6px 1px rgb(12, 1, 1);
  
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
  padding-left: 10px;
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