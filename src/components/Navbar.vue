<template>
  <div class="row">
    <div class="col-lg-12" id="navbar">
    <nav class="navbar navbar-expand-md navbar-light ">
     <router-link to='/' class="navbar-brand">movies</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
       
            <li class="nav-item">
                <router-link class="nav-link" to="/movies">MOVIES</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/time">TIME</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/cart" class="nav-link">TICKET</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/about" class="nav-link">ABOUT</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/login">SIGN IN</router-link>
            </li>
            </ul>
        </div>
    </nav>
   </div>
</div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Raphtalia;
  src: url('../../public/fonts/Ruponti.ttf');
}
.navbar {
  z-index: 10;
  background: rgba($color: #ddd, $alpha: .3);
   margin: 0;
   padding: 0 3%;
  .navbar-brand{
      color: rgb(255, 10, 124);
      padding-left: 1.2%;
      text-shadow: 2px 2px 5px rgba($color: #fff, $alpha: 0.9);
      font-size: 3.5rem;
      font-weight: 100;
      font-family: Raphtalia;
  }
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: rgb(255, 10, 124);;
    }
  }
}
 
/* Large screens ----------- */
@media only screen and (min-width : 720px) {
    // #navbar{
    //     margin-left: 14.3%;
    //     padding-right: 29.5%;
    // }
}
  
</style>