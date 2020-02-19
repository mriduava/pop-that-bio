<template>
  <div class="container-fluid">
    <div class="row container">
      <div class="col s12">
        <h4 class="title-text center">About us</h4>
        

        <div class="combs">
          <div class="honey-comb">
            <img src="https://scontent.fbma4-1.fna.fbcdn.net/v/t1.0-9/10650062_10207564536303530_5223223719937159771_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=uL5G5m-NIT0AX83dI-j&_nc_ht=scontent.fbma4-1.fna&oh=2688908f09b5c1d0367d0f8bba34395c&oe=5EBAA5A6" alt />
          </div>
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
        </div>

        <div class="combs2">
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://www.athentech.com/wp-content/uploads/2014/04/portrait-1.jpg" alt />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 tack center">
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et maxime accusantium facilis qui officiis quam harum nihil
            voluptatem mollitia omnis laboriosam quasi at, doloribus culpa odit veritatis rem necessitatibus beatae?
          </h6>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/images/About.gif" />
      </div>
    </div>
    <div class="section white">
      <div class="row container">
        <div class="row about">
          <div class="col s12">
            <h4 class="contact center">Contact Us</h4>

            <div class></div>
          </div>

          <div class="row">
            <div class="col s12 tack center">
              <h6>+460317396969</h6>
              <h6> info@popthatbio</h6>
              <h6>www.popthatbio.now.sh</h6>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img
          src="https://www.thetimes.co.uk/expert-traveller/wp-content/uploads/2018/11/GettyImages-664356146-2200x880.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let elems = document.querySelectorAll(".parallax");
    this.$M.Parallax.init(elems);
  }
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: queen;
  src: url("../assets/fonts/queen.ttf");
}

.container-fluid {
  position: relative;
  top: -60px;
  margin-bottom: -60px;
  background: rgb(243, 243, 243);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 90%,
    rgba(219, 166, 195, 0.99) 95%
  );
}

.title-text {
  font-family: queen;
  font-weight:bold;
  font-size: 8.5rem;
  padding-top: 50px;
  background: linear-gradient(to right, rgb(237, 44, 255) 30%, #03e74f 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact{
  font-family: queen;
  
  font-size: 2.5rem;
  padding-top: 10px;
  background: linear-gradient(to right, rgb(237, 44, 255) 30%, #03e74f 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.col {
  font-size: 3.5rem;
  padding-top: 20px;
  background: linear-gradient(to right, rgb(237, 44, 255) 30%, #03e74f 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.combs,
.combs2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.combs2 {
  position: relative;
  top: -46px;
}
.honey-comb {
  max-width: 200px;
  height: 200px;
  margin: 0.4%;
  border: 2px solid slategray;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.honey-comb img {
  width: 100%;
}
hr {
  position: relative;
  top: -50px;
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .combs2 {
    top: 0;
  }
  .honey-comb {
    max-width: 140px;
    min-width: 100px;
    height: 140px;
  }
}
@media (min-width: 300px) and (max-width: 812px) {
  .container-fluid {
    position: relative;
    top: -70px;
    margin-bottom: -73px;
  }
  .title-text {
    font-family: queen;
    font-size: 5rem;
  }

  hr {
    top: -30px;
  }
  .combs2 {
    top: 0;
  }
  .honey-comb {
    max-width: 120px;
    min-width: 120px;
    height: 120px;
  }
}
</style>