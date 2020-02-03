<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav class="nav-extended">
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
    </nav>
  </div>
</template>

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
   text-shadow: 1px 2.5px 1px rgb(12, 1, 1);
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