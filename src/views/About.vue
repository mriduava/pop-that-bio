<template>
  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FPB5FosTwM8s%2Fmaxresdefault.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FPB5FosTwM8s%2Fmaxresdefault.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FPB5FosTwM8s%2Fmaxresdefault.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FPB5FosTwM8s%2Fmaxresdefault.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FPB5FosTwM8s%2Fmaxresdefault.jpg"></a>
  </div>
</template>

<script>
export default {
mounted() {
    var elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems, {});
}
  
}


</script>