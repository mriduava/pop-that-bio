<template>
<div>
<<<<<<< Updated upstream
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
=======
<div class="carousel carousel-slider center" data-indicators="true">
    <div class="carousel-fixed-item center">
     
    </div>
    <div class="carousel-item" href="#one!">
      <img src="../assets/images/xsw.jpg" alt="" width="20%" >
     
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
  </div>
  <h2>Sveriges största biografkedja</h2>
  <p>
    Filmstaden AB driver biografer i Sverige på 21 orter med 32 425 fåtöljer i 255 salonger. Inom Filmstaden finns också affärsområdet Filmstaden Business, med Filmstaden Media, som förmedlar medieköp i våra kanaler på biografer och i digitala fönster, Företagsbiljetter, som säljer biobiljetter till företag, och Möten &
     Event, som hyr ut biografer till företagsevenemang.
  </p>

>>>>>>> Stashed changes
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


<style lang="css" scoped>
.mean-carousel{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  align-self:center;
  justify-content:center;
}
.carousel{
  width: 100%;
  perspective: 600%
  
}


.carousel-item{
  width:400%;
  size: 100%
}
.carousel-item-img{
width: 50%;

}

</style>