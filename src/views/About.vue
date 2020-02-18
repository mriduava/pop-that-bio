<template>
  <div class="container-fluid">
    <div class="container">
    <div class="row about">
      <div class="col s12">
        <h4 class="title-text center">A bout us...</h4>
        <hr class="hr-style" />


        <div class="honey-comb">

        </div>

      </div>

      <div class="row">
        <div class="col s12 tack center">
          <h6>Tack så mycket!</h6>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@font-face {
  font-family: queen;
  src: url("../assets/fonts/queen.ttf");
}

::selection {
  background-color: #C3CFE2;
}

.title-text{
  font-family: queen;
  font-size: 10rem;
  background: linear-gradient(to right, rgb(255, 128, 9) 30%, #1abe59 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.honey-comb{
  width: 200px;
  height: 200px;
  background: #1abe59;
  clip-path: polygon(3% 0, 100% 0, 100% 100%, 0 100%);
}
hr{
  position: relative;
  top: -50px;
}
  
</style>