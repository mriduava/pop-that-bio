<template>
 <div>
    <div class="container-fluid">
     <div class="video-container">
       <iframe width="853" height="480" :src="'https://www.youtube.com/embed/' + movieDetail.movieTrailer" 
               frameborder="0" allowfullscreen>
       </iframe>
     </div>
     <div class="row">
       <div class="col x12 s6 m4 l3">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" :src="movieDetail.image">
            </div>
            <div class="card-text">
                <h5 class="green-text text-darken-4 left">{{movieDetail.title}}</h5>
                <p class="green-text text-darken-4 left">{{movieDetail.showDate}} | {{movieDetail.showTime}}</p>
            </div>
          </div>
       </div>
     </div>

    </div>
 </div>
</template>

<script>
export default {
  name: 'moviedetail',
  data() {
    return {
      movie: this.$store.state.data,
      movieDetail: []
    }
  },
  methods: {
    getMovie(){
      this.movie.forEach(e => {
        if(e.slug == this.$route.params.slug){
          this.movieDetail = e;
        }
      });
    }
  },
  created() {
    this.getMovie();
  },
}
</script>

<style lang="css" scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}
.video-container{
  position: relative;
  top: -10px;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
}

.card{
  position: relative;
  width: 200px;
  top: -200px;
  left: 30%;
  border: 2px solid rgb(29, 255, 29);
  max-height: 297px;
  object-fit: cover;
}

.card-text{
  position: relative;
  top: -80px;
  left: 210px;
}
  
</style>

