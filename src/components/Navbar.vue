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
            <router-link class="nav-link" to="/signin">LOGGA IN</router-link>
          </li>
      
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <router-link to="/mypage"><i class="large material-icons   white-text text-grey lighten-5">account_circle</i></router-link>
    <li class="nav-item">
    <router-link to="/"><a class="brand-logo "><p class=" white-text text-grey lighten-5 ">Hame</p></a></router-link>
      </li>
    <li class="nav-item">
            <router-link to="/movies" class="nav-link"><p class=" white-text text-grey lighten-5 ">FILMER</p></router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">OM OSS</p></router-link>
          </li>
           <li class="nav-item">
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">Medlemmar</p></router-link>
          </li> 
          <li class="nav-item">
            <router-link to="/about" class="nav-link"><p class=" white-text text-grey lighten-5 ">Frågor och svar</p></router-link>
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
// import M from 'materialize-css'
export default {
  mounted() {
    
    var elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems);
    setTimeout(this.$M.Carousel.init(elems), 1000)  
  }, 
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