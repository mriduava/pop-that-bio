<template>
  <div>
    <div class="book-ticket-container">
      <router-link :to="'/movies/' + movieDetail.slug">
        <div class="back-link">
          <i class="fa fa-angle-left"></i>
          <h5>Tillbaka</h5>
        </div>
      </router-link>

      <div>
        <h4>Antal biljetter</h4>
      </div>
      <div class="ordinarie">
        <div class="ordinarie-mini">
          <h6>Ordinarie</h6>
        </div>
        <div class="buttons">
          <div>
            <i @click="decreaseOrd()" class="fa fa-minus-circle"></i>
          </div>
          <div>
            <h6>{{ counterOrd }}</h6>
          </div>
          <div>
            <i @click="increaseOrd()" class="fa fa-plus-circle"></i>
          </div>
        </div>
      </div>
      <div class="ordinarie">
        <div class="ordinarie-mini">
          <h6>Pensionär</h6>
        </div>
        <div class="buttons">
          <div>
            <i @click="decreasePen()" class="fa fa-minus-circle"></i>
          </div>
          <div>
            <h6>{{ counterPen }}</h6>
          </div>
          <div>
            <i @click="increasePen()" class="fa fa-plus-circle"></i>
          </div>
        </div>
      </div>
      <div class="ordinarie" v-if="childAllowed">
        <div class="ordinarie-mini">
          <h6>Barn</h6>
        </div>
        <div class="buttons">
          <div>
            <i @click="decreaseChild()" class="fa fa-minus-circle"></i>
          </div>
          <div>
            <h6>{{ counterChild }}</h6>
          </div>
          <div>
            <i @click="increaseChild()" class="fa fa-plus-circle"></i>
          </div>
        </div>
      </div>
      <div class="end">
        <h6>Antal besökare: {{ this.nrOfcustomer }}</h6>
      </div>
      <div class="valj">
        <router-link :to="{path: 'movies/' + movieDetail.slug + '/ticket/seatsplan', props: {counterChild, counterOrd, counterPen}}">
        // "'/movies/' + movieDetail.slug + '/ticket/seatsplan'"
          <button class="btn btn-large waves-effect waves-light">Välj platser</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookticket",
  data() {
    return {
      counterOrd: 1,
      counterPen: 0,
      counterChild: 0,
      movies: this.$store.getters.movies,
      movieDetail: [],
      childAllowed: false,
      nrOfcustomer: 1
    };
  },
  methods: {
    getMovie() {
      this.movies.forEach(movie => {
        this.$route.params.slug;
        if (movie.slug === this.$route.params.slug) {
          this.movieDetail = movie;
          window.console.log(this.movieDetail, "chosen movie");
          if (this.movieDetail.age_limit < 7) {
            this.childAllowed = true;
            window.console.log("children allowed");
            //alert("allowed");
          }
        }
      });
    },

    increaseOrd() {
      if (
        this.counterOrd + this.counterPen + this.counterChild < 8 &&
        this.counterOrd > -1
      ) {
        this.counterOrd++;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    },
    decreaseOrd() {
      if (this.counterOrd > 0) {
        this.counterOrd--;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    },
    increasePen() {
      if (
        this.counterOrd + this.counterPen + this.counterChild < 8 &&
        this.counterPen > -1
      ) {
        this.counterPen++;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    },
    decreasePen() {
      if (this.counterPen > 0) {
        this.counterPen--;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    },
    increaseChild() {
      if (
        this.counterOrd + this.counterPen + this.counterChild < 8 &&
        this.counterChild > -1
      ) {
        this.counterChild++;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    },
    decreaseChild() {
      if (this.counterChild > 0) {
        this.counterChild--;
        this.nrOfcustomer =
          this.counterOrd + this.counterPen + this.counterChild;
      }
    }
  },
  created() {
    this.getMovie();
  }
};
</script>

<style lang="css" scoped>
.book-ticket-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  width: 30%;
  color: rgb(73, 15, 15);
}

.ordinarie {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*border: 1px solid black*/
}

.ordinarie-mini {
  display: flex;
  align-content: flex-start;
  /*border: 1px solid black*/
}

.buttons {
  display: flex;
  flex-direction: row;
  /*border: 1px solid black;*/
  align-items: center;
}

.btn {
  background: rgba(202, 8, 112, 0.692);
}

.valj {
  display: flex;
  justify-content: center;
  /*border: 1px solid black;*/
  padding-top: 20px;
  padding-bottom: 80px;
}

.fa {
  font-size: 40px;
  padding: 8px;
}

.end {
  padding-top: 50px;
  /*display: block;*/
  margin: 0 auto;
  color: black;
}

.back-link {
  display: flex;
  flex-direction: row;
  /*border: 1px solid black;*/
}
</style>