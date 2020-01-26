<template>
  <div class="carousel-container">
    <transition-group>
      <div
        v-for="(movie, index) in moviesData.slice(0, 1)"
        :key="index"
        id="slideshow"
        :style="{
          position: 'relative',
          width: '100%',
          height: '120vh',
          top: '-117px',
          zIndex: '-1',
       
          overflow: 'hidden',
          background: 'linear-gradient(45deg, rgba(197, 49, 99, 0.7) 0%, rgba(197, 49, 99, 0.3) 100%),' +  
                      'url(\'' + movie.land_image + '\')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
      }"
      >
        <div class="carousel-text">
          <h4 class="white-text text-lighten-4">{{movie.title}}</h4>
          <hr class="hr-style m-0 p-0" />
          <h6 class="green-text text-accent-3">{{formatTime(movie.showTime.toMillis())}}</h6>
        </div>
      </div>
    </transition-group>

    <div class="arrow">
      <a class="arrow-link" @click.prevent="scrollTo('#movies')"><i class="fas fa-angle-double-down"></i></a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "carousel",
  data() {
    return {
      images: [],
      index: 0
    };
  },
  computed: {
    moviesData() {
      return this.$store.getters.movies;
    }
  },
  methods: {
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    scrollTo(selector){
      document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
    },
  
    // slideImage() {
    //   for(let i=0; i<this.movies; i++){
    //     this.images.push(this.movies[i].land_image)
    //   }
    //   const first = this.images.shift();
    //   this.images = this.slides.concat(first);
    // }
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
    // setInterval(this.mriduSlide, 5000);
  }
};
</script>

<style lang="css" scoped>
.carousel-container {
  position: relative;
}

#slideshow {
  opacity: 1;
  transition: opacity 1s;
}

/* #slideshow {
  position: relative;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 120vh;
  top: -117px;
  z-index: -1;
  object-fit: cover;
  overflow: hidden;
  background: linear-gradient(
      45deg,
      rgba(197, 49, 99, 0.6) 0%,
      rgba(197, 49, 99, 0.3) 100%
    ),
    url("https://images.wallpapersden.com/image/download/frozen-2_67184_1360x768.jpg");
  background-repeat: no-repeat;
  background-size: cover;
} */

.carousel-text {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: relative;
  float: left;
  top: 60%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hr-style {
  position: relative;
  left: 0;
  width: 240px;
  border: 0;
  height: 1px;
  background: #fff;
  background-image: -webkit-linear-gradient(
    left,
    rgba(150, 19, 121, 0.959),
    rgb(245, 14, 233),
    #fff
  );
}


.arrow{
  position: relative;
	display: flex;
	justify-content: center;
  top: -55vh;
}

.arrow>a{
	font-size: 40px;
	position: absolute;
}

.arrow>a>i{
	color: #fff;
}

.arrow>a>i:hover{
  cursor: pointer;
  color: greenyellow;
}

.arrow{
	animation-name: arrowDown;
	animation-duration: 1s;
	animation-timing-function: linear;
	animation-delay: 0s;
	animation-iteration-count: infinite;
}

@keyframes arrowDown {
	0%{
		transform: translateY(0);
	}
	50%{
		transform: translateY(15px);
	}
	100%{
		transform: translateY(0);
	}
}
</style>