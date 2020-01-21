<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Pop that Bio</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/time">Time</router-link> |
      <router-link to="/ticket">Ticket</router-link> |
      <router-link to="/sign-in">Sign in</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
   
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav{
  z-index: +10;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddd;
}

::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #a4b1b0;
}

#nav {
  color: #fff;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ddd;
}
</style>
