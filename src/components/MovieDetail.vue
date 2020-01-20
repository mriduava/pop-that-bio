<template>
 <div>
    <div class="main-container">
     <div class="trailer-container">
       <iframe width="700" height="480" :src="'https://www.youtube.com/embed/' + movieDetail.movieTrailer" 
               frameborder="0" allowfullscreen>
       </iframe>
     </div>
     <div class="middle">
       <div>PIC</div>
       <div>TITLE</div>
       <div><button>Biljetter</button></div>
     </div>
      <div class="last">{{ movieDetail.text }}</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'moviedetail',
  computed:{
    movieDetail(){
      return this.$store.state.data[this.$route.params.movieid - 1];
    }
  }
}
</script>

<style lang="css" scoped>

.main-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  }

.middle {
  display: flex;
  justify-content: space-evenly
}

.card{
  position: relative;
  width: 200px;
  top: -200px;
  left: 30%;
  border: 2px solid rgb(29, 255, 29);
  height: 297px;
}

.card-text{
  position: relative;
  top: -80px;
  left: 210px;
}

.description {
  margin-top: 20px;
  padding-top: 20px
}
  
</style>

