<template>
<div>
 <div class="slider">
    <ul class="slides">
      <li>
        <img src="../assets/images/wsw.jpg" alt=""> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/2"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/3"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/4"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  mounted() {
    var elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems);

    setTimeout(this.$M.Carousel.init(elems), 1000)
    
  }
 
}
</script>
<script>
  $(document).ready(function(){
      $('.slider').slider();
    });
        
</script>

<style lang="css">

.headline{
  text-align: center;
}

</style>