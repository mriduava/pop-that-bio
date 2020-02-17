<template>
  <div id="app">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="app-content">
      <router-view/>
    </div>
    
    <div class="footer">
      <Footer/>
    </div>
    
  </div>
</template>

<script>
// import Navbar from '@/components/partials/Navbar2'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import M from 'materialize-css'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  mounted() {
    M.AutoInit();
  },
    methods: {
    stickyNav() {
      let navContainer = document.querySelector("#sticky");
      let sticky = navContainer.offsetTop;
        if (window.pageYOffset > sticky) {
          navContainer.classList.add("sticky")
        } else {
          navContainer.classList.remove("sticky");
        }
    }
  },
  created() {
    window.onscroll = () =>{
        this.stickyNav();
    }
  },
}
</script>

<style lagg="css">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.app-content{
  flex: 1;
  margin-top: 120px;
}

html {
  scroll-behavior: smooth;
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

/* For Sticky Navbar */ 
.sticky {
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

/* .sidenav-overlay{
  padding-top: 20px;
} */

</style>
