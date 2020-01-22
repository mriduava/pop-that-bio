<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/"><a class="brand-logo">POP THAT BIO</a></router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="scrollTo('#movies')">MOVIES</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/time">TIME</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/ticket" class="nav-link">TICKET</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">ABOUT</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/signin">SIGN IN</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(selector){
      document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>

<style lang="css" scoped>
nav{
  background: rgba(197, 49, 99, 0.5);
  border-bottom: 1px solid rgb(213,187,47);
}

.brand-logo{
  padding-left: 2%;
}

#nav-mobile{
  padding-right: 2%;
}
  
</style>