<template>
  <div class="container-fluid">
    <transition-group>
      <div v-for="(movie, index) in moviesData.slice(i, i+1)" :key="index">
        <div
          id="slideshow"
          :style="{
          position: 'relative',
          width: '100%',
          height: '109vh',
          top: '-117px',
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
    </transition-group>

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
  /*position: relative;*/
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
  top: -59vh;
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
