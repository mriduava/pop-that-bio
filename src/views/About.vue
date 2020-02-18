<template>
  <div class="container-fluid">
    <div class="row container">
      <div class="col s12">
        <h4 class="title-text center">A bout us...</h4>
        <hr class="hr-style" />

        <div class="honey-comb"></div>
      </div>

      <div class="row">
        <div class="col s12 tack center">
          <h6>Tack så mycket!</h6>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
      </div>
    </div>
    <div class="section white">
      <div class="row container">
        <div class="row about">
          <div class="col s12">
            <h4 class="center">Contacts...</h4>
            <hr class="hr-style2" />

            <div class></div>
          </div>

          <div class="row">
            <div class="col s12 tack center">
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
  font-size: 10rem;
  padding-top: 50px;
  background: linear-gradient(to right, rgb(255, 128, 9) 30%, #1abe59 70%);
  
  -webkit-text-fill-color: transparent;
}

.honey-comb {
  width: 200px;
  height: 200px;
  background: #1abe59;
  clip-path: polygon(3% 0, 100% 0, 100% 100%, 0 100%);
}
hr {
  position: relative;
  top: -50px;
}
</style>