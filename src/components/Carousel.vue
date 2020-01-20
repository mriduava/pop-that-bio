<template>
 <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="img-gradient">
          <img class="d-block w-100" src="https://cnet1.cbsistatic.com/img/86V_bltt71A4dI4vEyTKLp3f_gc=/1092x0/2019/11/25/48850c74-c475-4b6d-b580-6667b2293954/frozen2header.jpg" alt="First slide">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h1>FROZEN</h1>
        <p>FRIDAY | 19:15 - 21:20</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="img-gradient">
          <img class="d-block w-100" src="https://media.vanityfair.com/photos/5b16c93863b65d128d354850/master/pass/Jurassic-Park-Fallen-Kingdom-Lawson-Review.jpg" alt="Second slide">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h1>JURASSIC WORLD</h1>
        <p>SUNDAY | 20:15 - 21:50</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="img-gradient">
          <img class="d-block w-100" src="http://www.extraextra.se/wp-content/uploads/2019/05/avatar.jpg" alt="Third slide">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h1>AVATAR</h1>
        <p>SUNDAY | 20:15 - 21:50</p>
      </div>
    </div>
     
  </div>
  <hr class="hr-style m-0 p-0">
</div>
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style lang="scss">
.carousel-item{
  overflow: hidden;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  object-fit: cover;
  .img-gradient{
     position:relative;
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
}

.hr-style{
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(left, #15026bdc, #ddd, #15026bdc);
}
  
</style>