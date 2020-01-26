<template>
  <div class="container-fluid navbar navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/"><a class="brand-logo">POP THAT BIO</a></router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="nav-item">
            <router-link to="/movies" class="nav-link">MOVIES</router-link>
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