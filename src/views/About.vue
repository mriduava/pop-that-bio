<template>
<div class="container-fluid">
<div class="parallax-container">
      <div class="parallax"><img src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></div>
    </div>
    </div>
</template>

<script>
export default {
mounted(){
  var elems = document.querySelectorAll('.parallax');
   this.$M.Parallax.init(elems); 
}
  
}
</script>

<style lang="css" scoped>

</style>