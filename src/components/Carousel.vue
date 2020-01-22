<template>
<div class="carousel-container">
  <div id="slideshow">

    <div class="carousel-text">
      <h4 class="white-text text-lighten-4">Frozen 2</h4>
      <hr class="hr-style m-0 p-0">
      <h6>Sunday | 15:20 - 17:10</h6>
    </div>
    <!-- <hr class="hr-style m-0 p-0"> -->

  <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="http://www.extraextra.se/wp-content/uploads/2019/05/avatar.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="https://www.inveaquaculture.com/wp-content/uploads/2016/04/beautiful-nature-wallpaper-1920x1080.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"></a>
  </div>
    
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'carousel',
  data() {
    return {
       
    }
  },

  mounted() {    
    $(document).ready(function(){
      // let imgList = [
      //   "http://www.extraextra.se/wp-content/uploads/2019/05/avatar.jpg",
      //   "https://www.inveaquaculture.com/wp-content/uploads/2016/04/beautiful-nature-wallpaper-1920x1080.jpg"
      // ];
      // let i = 0;
      // $("#slideshow").fadeTo('slow', 0.3, function(){
      //   $(this).css("background", 
      //   "linear-gradient(0deg,rgba(197, 49, 99,0.8),rgba(197,49,99,0.8)),url("
      //   + imgList[i] + ") no-repeat center /cover");
      // }).delay(1000).fadeTo('slow', 1);
      // $('.carousel').carousel();
      // setInterval(function() {
      //   $('.carousel').carousel('next');
      // }, 2000); // every 2 seconds

      // $('.carousel').carousel({ padding: 200 });
      // autoplay();
      // function autoplay() {
      //     $('.carousel').carousel('next');
      //     setTimeout(autoplay, 4500);
      // }




    });
  },
  methods: {
    // mriduSlide(){
    //   let imgList = [
    //     "http://www.extraextra.se/wp-content/uploads/2019/05/avatar.jpg",
    //     "https://www.inveaquaculture.com/wp-content/uploads/2016/04/beautiful-nature-wallpaper-1920x1080.jpg"
    //   ];
    //   let i = 0;
    //   $("#slideshow").fadeTo('slow', 0.3, function(){
    //     $(this).css("background", 
    //     "linear-gradient(0deg,rgba(197, 49, 99,0.8),rgba(197,49,99,0.8)),url("
    //     + imgList[i] + ") no-repeat center /cover");
    //   }).delay(1000).fadeTo('slow', 1);
    // }
  },
  created() {
    // this.mriduSlide();
  },
}
</script>

<style lang="css" scoped>

#slideshow{
  position: relative;
  margin: 0 auto; 
  position: relative; 
  width: 100%; 
  height: 120vh; 
  top: -117px;
  z-index: -1;
  object-fit: cover;
  overflow: hidden;
  background: linear-gradient(45deg,rgba(197, 49, 99,0.75) 0%, rgba(197,49,99,0.5) 100%),
            url("https://images.wallpapersden.com/image/download/frozen-2_67184_1360x768.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.carousel-text{
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: relative;
  float: left;
  top: 60%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}

.image-slider{
  z-index: 100;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  object-fit: cover;
}

.img-gradient::after {
  content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
  display:inline-block;
  background: linear-gradient(to right, rgba(9, 26, 63, 0.61) 0%,rgba(255, 255, 255, 0.1) 100%);
  background: linear-gradient(to bottom, rgba(36, 36, 62, 0.01) 0%, rgba(15, 12, 41, 0.9) 100%);
}
.img-gradient img{
  display:block;
}
.carousel-caption{
  position: absolute;
  text-align: left;
  top: 50vh;
  left: 5%;
}

.img-gradient{
  position:relative;
}

.hr-style{
  position: relative;
  /* top: 55%; */
  left: 0;
  width: 240px;
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(left, rgb(77, 19, 74), rgb(245, 14, 233), #fff);
}
  
</style>