<template>
  <div id="app">

    <Navbar/>
    <router-view/>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
</style>
