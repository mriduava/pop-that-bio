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
          <h6 class="counter">
            <i @click="decreaseOrd()" class="fa fa-minus-circle"></i>
            <span>{{ counterOrd }}</span>
            <i @click="increaseOrd()" class="fa fa-plus-circle"></i>
          </h6>
        </div>
        <div class="ticket-info">
          <h6>Pensionär</h6>
          <h6 class="counter">
            <i @click="decreasePen()" class="fa fa-minus-circle"></i>
            <span>{{ counterPen }}</span>
            <i @click="increasePen()" class="fa fa-plus-circle"></i>
          </h6>
        </div>
        <div class="ticket-info">
          <h6 class="text-grey">Barn</h6>
          <h6 class="counter">
            <i @click="decreaseChild()" class="fa fa-minus-circle"></i>
            <span>{{ counterChild }}</span>
            <i @click="increaseChild()" class="fa fa-plus-circle"></i>
          </h6>
        </div>

        <div class="visitors-num">
          <h6 class="text-center">Antal besökare: {{ this.nrOfcustomer }} (max 8 st)</h6>
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
  position: relative;
  top: -50px;
  padding-bottom: 3%;
}
.title-text {
  text-align: center;
  color: rgb(204, 9, 113);
}

.reserve-info {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.ticket-details {
  margin-top: 2%;
}
.ticket-info {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  min-width: 280px;
}

.counter {
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.counter i {
  font-size: 1.9rem;
}

.counter i:hover {
  cursor: pointer;
  color: rgb(204, 9, 113);
}

.ticket-info h6 {
  font-size: 1.4rem;
}

.visitors-num {
  text-align: center;
  margin-top: 5%;
}
.buttons {
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  margin: 5% auto;
}

.btn {
  background: rgba(202, 8, 112, 0.692);
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
  .ticket-info,
  .buttons {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 280px;
  }
  .buttons {
    margin-top: 6%;
  }
}
</style>