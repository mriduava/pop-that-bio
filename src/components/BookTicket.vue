<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4>Antal biljetter</h4>
    </div>
    <hr class="hr-style" />
    <div class="reserve-info">
      <div class="ticket-details">
        <div class="ticket-info">
          <h6>Ordinarie</h6>
          <h6>
            <i @click="decreaseOrd()" class="fa fa-minus-circle"></i>
            <h6>{{ counterOrd }}</h6>
            <i @click="increaseOrd()" class="fa fa-plus-circle"></i>
          </h6>
        </div>
        <div class="ticket-info">
          <p>Pensionär</p>
          <h6>
            <i @click="decreasePen()" class="fa fa-minus-circle"></i>
            <h6>{{ counterPen }}</h6>
            <i @click="increasePen()" class="fa fa-plus-circle"></i>
          </h6>
        </div>
        <div class="ticket-info">
          <p class="text-grey">Barn</p>
          <h6>
            <i @click="decreaseChild()" class="fa fa-minus-circle"></i>
            <h6>{{ counterChild }}</h6>
            <i @click="increaseChild()" class="fa fa-plus-circle"></i>
          </h6>
        </div>

        <div class="price-info">
          <h6>Antal besökare: {{ this.nrOfcustomer }} (max 8 st)</h6>
        </div>
      </div>
    </div>

    <div class="buttons">
      <router-link :to="'/movies/' + movieDetail.slug">
        <button class="modal-trigger btn btn-small waves-effect waves-light">Tillbaka</button>
      </router-link>

      <router-link :to="'/movies/' + movieDetail.slug + '/ticket/seatsplan'">
        <button
          class="modal-trigger btn btn-small waves-effect waves-light"
          @click="updateTickets"
        >Välj platser</button>
      </router-link>
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
        if (movie.slug === this.$route.params.slug) {
          this.movieDetail = movie;
          if (this.movieDetail.age_limit < 7) {
            this.childAllowed = true;
          }
        }
      });
    },
    updateTickets() {
      let tickets = {
        totalTickets: this.nrOfcustomer,
        numberOfChildren: this.counterChild,
        numberOfAdults: this.counterOrd,
        numberOfSeniors: this.counterPen
      };
      this.$store.dispatch("updateTickets", tickets);
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
    this.$store.dispatch("getAuditoriums");
    this.$store.dispatch("getBeforeBookings");
  }
};
</script>

<style lang="css" scoped>
.container-fluid {
  padding-bottom: 3%;
}
.title-text {
  text-align: center;
  color: rgb(204, 9, 113);
}

.reserve-info {
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
}

.movie-info {
  width: 350px;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
}

.movie-image {
  width: 140px;
  padding: 0;
  margin-right: 3%;
}

.movie-image img {
  width: 100%;
  display: block;
  overflow: hidden;
}

.movie-text {
  margin-top: 4.5%;
  padding: 0;
}
.ticket-details {
  margin-top: 2%;
}
.ticket-info,
.price-info {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  min-width: 280px;
}

.clear {
  clear: both;
  display: block;
}

.user-info {
  display: flex;
  justify-content: center;
}

.input-field {
  width: 350px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 0 1% 3% 1%;
}

.btn {
  background: rgba(202, 8, 112, 0.692);
  margin-left: 10px;
  margin-right: 10px;
}

.hr-style {
  border: 0;
  min-width: 70%;
  max-width: 1%;
  height: 1px;
  margin: 0 auto 10px auto;
  background: #fff;
  background: -webkit-linear-gradient(left, #fff, rgb(204, 9, 113), #fff);
}

/* RESPONSIVE STYLE*/
@media (min-width: 1281px) {
}
@media (min-width: 1025px) and (max-width: 1280px) {
}
@media (min-width: 768px) and (max-width: 1024px) {
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}
@media (min-width: 481px) and (max-width: 767px) {
}
@media (min-width: 310px) and (max-width: 568px) {
  .movie-info {
    width: 280px;
    margin: 0 auto;
  }

  .movie-text {
    margin-top: 18%;
    padding: 0;
  }
  .ticket-info,
  .price-info {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 280px;
  }
  .input-field {
    width: 280px;
  }
}
</style>