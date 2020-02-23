<template>
  <div class="container-fluid">
    <div id="carousel" v-for="(movie, index) in moviesData.slice(0, 5)" :key="index">
      <div
        :class="'slide' + index"
        :style="{
          position: 'absolute',
          width: '100%',
          height: '120vh',
          top: '2px',
          zIndex: '-1',
          objectFilt: 'contain',
          overflow: 'hidden',
          background: 'linear-gradient(45deg, rgba(197, 49, 99, 0.8) 0%, rgba(197, 49, 99, 0.2) 100%),' +  
                      'url(\'' + movie.land_image + '\')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'block'
      }"
      >
        <div class="carousel-text">
          <router-link :to="'/movies/' + movie.slug">
            <h4 class="white-text text-lighten-4">{{movie.title}}</h4>
          </router-link>
          <hr class="hr-style m-0 p-0" />
        </div>
      </div>
    </div>

    <div class="arrow">
      <a class="arrow-link" @click.prevent="scrollTo('#movies')">
        <i class="fas fa-angle-double-down"></i>
      </a>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "carousel",
  data() {
    return {
      i: 1
    };
  },
  mounted() {
    // setInterval(this.changeIndex, 1000);
  },
  computed: {
    moviesData() {
      return this.$store.state.data;
    }
  },
  methods: {
    changeIndex() {
      this.i++;
      if (this.i > 5) {
        this.i = 0;
      }
    },
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    }
  },
  created() {
    this.$store.dispatch("getDataFromFirebase");
  }
};
</script>

<style lang="css" scoped>
#carousel {
  height: 20vh;
}
.slide0 {
  animation: fade0 20s infinite;
}

.slide1 {
  animation: fade1 20s infinite;
}

.slide2 {
  animation: fade2 20s infinite;
}

.slide3 {
  animation: fade3 20s infinite;
}

.slide4 {
  animation: fade4 20s infinite;
}

@keyframes fade0 {
  0%,
  10% {
    opacity: 1;
  }
  15%,
  30% {
    opacity: 0;
  }
  35%,
  50% {
    opacity: 0;
  }
  55%,
  70% {
    opacity: 0;
  }
  75%,
  90% {
    opacity: 0;
  }
  95%,
  100% {
    opacity: 1;
  }
}
@keyframes fade1 {
  0%,
  10% {
    opacity: 0;
  }
  15%,
  30% {
    opacity: 1;
  }
  35%,
  50% {
    opacity: 0;
  }
  55%,
  70% {
    opacity: 0;
  }
  75%,
  90% {
    opacity: 0;
  }
  95%,
  100% {
    opacity: 0;
  }
}
@keyframes fade2 {
  0%,
  10% {
    opacity: 0;
  }
  15%,
  30% {
    opacity: 0;
  }
  35%,
  50% {
    opacity: 1;
  }
  55%,
  70% {
    opacity: 0;
  }
  75%,
  90% {
    opacity: 0;
  }
  95%,
  100% {
    opacity: 0;
  }
}

@keyframes fade3 {
  0%,
  10% {
    opacity: 0;
  }
  15%,
  30% {
    opacity: 0;
  }
  35%,
  50% {
    opacity: 0;
  }
  55%,
  70% {
    opacity: 1;
  }
  75%,
  90% {
    opacity: 0;
  }
  95%,
  100% {
    opacity: 0;
  }
}

@keyframes fade4 {
  0%,
  10% {
    opacity: 0;
  }
  15%,
  30% {
    opacity: 0;
  }
  35%,
  50% {
    opacity: 0;
  }
  55%,
  70% {
    opacity: 0;
  }
  75%,
  90% {
    opacity: 1;
  }
  95%,
  100% {
    opacity: 0;
  }
}

.carousel-text {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: relative;
  float: left;
  top: 50%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 5;
}
.carousel-text h3 {
  margin-bottom: 2px;
  padding-bottom: 2px;
}
.carousel-text h6 {
  color: rgb(55, 255, 171);
  font-size: 1.4rem;
  padding: 0;
  margin-top: 2px;
}

.hr-style {
  left: 0;
  width: 50vw;
  border: 0;
  height: 3px;
  background: #fff;
  background-image: -webkit-linear-gradient(
    left,
    rgba(150, 19, 121, 0.959),
    rgb(245, 14, 233),
    #fff
  );
}

.arrow {
  position: relative;
  display: flex;
  justify-content: center;
  top: -15vh;
}

.arrow > a {
  font-size: 40px;
  position: absolute;
}

.arrow > a > i {
  color: #fff;
}

.arrow > a > i:hover {
  cursor: pointer;
  color: rgb(101, 228, 112);
}

.arrow {
  animation-name: arrowDown;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
}

@keyframes arrowDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (min-width: 1281px) {
  .hr-style {
    width: 30vw;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .hr-style {
    width: 25vw;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hr-style {
    width: 27vw;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}

@media (min-width: 481px) and (max-width: 767px) {
}

@media (min-width: 320px) and (max-width: 480px) {
}
</style>
