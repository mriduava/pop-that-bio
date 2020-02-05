<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav  class="nav-extended">
    <div class="nav-wrapper">
        <router-link to="/"><a class="brand-logo "><p>POP THAT BIO</p></a></router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-align-justify"></i></a>
      <ul class="right hide-on-med-and-down">
        <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
          </li>

         <li class="nav-item">
            <router-link to="/about" class="nav-link">OM OSS</router-link>
          </li>
        <li class="nav-item">
<<<<<<< HEAD
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
=======
            <div class="nav-link modal-trigger" data-target="modal-login">LOGGA IN</div>
          </li>
          <li class="nav-item">
            <div class="nav-link modal-trigger" data-target="modal-signup">SKAPA KONTO</div>
>>>>>>> develop
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
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <i class="large material-icons   white-text text-grey lighten-5">account_circle</i>
    <li class="nav-item">
<<<<<<< HEAD
    <router-link to="/"><a class="brand-logo "><p class=" white-text text-grey lighten-5 ">Home</p></a></router-link>
      </li>
    <li class="nav-item">
            <router-link to="/movies" class="nav-link"><p class=" white-text text-grey lighten-5 ">FILMER</p></router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">OM OSS</p></router-link>
=======
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
>>>>>>> develop
          </li>
           <li class="nav-item">
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">Medlemmar</p></router-link>
          </li> 
          <li class="nav-item">
<<<<<<< HEAD
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">Frågor och svar</p></router-link>
=======
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
          </li>
        </ul>
         <ul class="side-nav" id="mobile-demo">
         <li class="nav-item">
            <router-link to="/movies" class="nav-link">FILMER</router-link>
>>>>>>> develop
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin"><p class=" white-text text-grey lighten-5 ">Kundservice</p></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin"><p class=" white-text text-grey lighten-5 ">LOGGA IN</p></router-link>
          </li>
  </ul>
 
  </div>
</template>
<script>
export default {
  mounted() {
    
    var elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems);
<<<<<<< HEAD
    setTimeout(this.$M.Carousel.init(elems), 1000)  
  }, 
=======

    var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

    setTimeout(this.$M.Carousel.init(elems), 1000)
    
  },
  function(){
    (document).ready(function(){
  ('.sidenav').sidenav();
  });
  
 
    

  } 
  
>>>>>>> develop
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

.sidenav{
  background-color: rgba(107, 22, 72, 0.788);
}

.our-brand-logo {
  font-size: 2.5rem;
  padding-left: 1.5%;
  font-family: borntogrille;
   text-shadow: 1px 6px 1px rgb(12, 1, 1);
<<<<<<< HEAD
=======
  
>>>>>>> develop
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