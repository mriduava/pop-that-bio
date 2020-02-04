<template>
<div>
 <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="../assets/images/storgatan.jpg" ></a>
    <a class="carousel-item" href="#two!"><img src="../assets/images/Bio.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="../assets/images/large-2.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="../assets/images/xsw.jpg"></a>
  </div>
  <h2>Sveriges största biografkedja</h2>
  <p>
    Filmstaden AB driver biografer i Sverige på 21 orter med 32 425 fåtöljer i 255 salonger. Inom Filmstaden finns också affärsområdet Filmstaden Business, med Filmstaden Media, som förmedlar medieköp i våra kanaler på biografer och i digitala fönster, Företagsbiljetter, som säljer biobiljetter till företag, och Möten &
     Event, som hyr ut biografer till företagsevenemang.
  </p>

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