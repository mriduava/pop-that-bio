<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4 class>Reservation</h4>
    </div>
    <hr class="hr-style" />
    <div class="reserve-info">
      <div class="movie-info">
        <div class="movie-image">
          <img :src="movieDetail.image" alt="pop-that-bio" />
        </div>
        <div class="movie-text">
          <h5>{{movieDetail.title}}</h5>
          <h6>Datum: {{reserveInfo.showTime.dateName}}, {{reserveInfo.showTime.date}}/{{reserveInfo.showTime.month}}</h6>
          <h6>Tid: {{reserveInfo.showTime.time.time}}</h6>
          <h6>{{reserveInfo.auditorium}}</h6>
        </div>
      </div>
      <div class="ticket-details">
        <div class="ticket-info">
          <h6>{{ticketsInfo.totalTickets}} x Biljetter</h6>
          <h6>{{totalPrice}} kr</h6>
        </div>
        <div class="ticket-info grey-text">
          <p>{{ticketsInfo.numberOfAdults}} x Vuxen</p>
          <p>{{adultPrice}} kr</p>
        </div>
        <div class="ticket-info grey-text">
          <p class="text-grey">{{ticketsInfo.numberOfSeniors}} x Pensionär</p>
          <p>{{seniorPrice}} kr</p>
        </div>
        <div class="ticket-info grey-text">
          <p>{{ticketsInfo.numberOfChildren}} x Barn</p>
          <p>{{childPrice}} kr</p>
        </div>
        <div class="price-info">
          <h5>Total</h5>
          <h5>{{totalPrice}} kr</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="user-info">
        <form>
          <div class="row">
            <div class="input-field">
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                value
                required
                autofocus
                v-model="telephone"
              />
              <label for="icon_telephone">Telefonnummer</label>
            </div>
            <div class="input-field">
              <input
                id="email"
                type="text"
                class="validate"
                value
                required
                autofocus
                v-model="email"
              />
              <label for="email">Din e-post</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="buttons">
      <router-link :to="'/movies/' + movieDetail.slug + '/ticket/seatsplan'">
        <button class="btn btn-small waves-effect waves-light">Tillbaka</button>
      </router-link>
      <button class="btn btn-small waves-effect waves-light" @click="completeBooking">Reservera</button>
    </div>
    <div v-if="showReserveInfo">
      <ConfirmReserve />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ConfirmReserve from "@/components/ConfirmReserve";
export default {
  name: "reservation",
  components: {
    ConfirmReserve
  },
  data() {
    return {
      telephone: "",
      email: "",
      movies: this.$store.getters.movies,
      movieDetail: [],
      reserveInfo: this.$store.state.reserveInfo,
      ticketsInfo: this.$store.state.ticketsInfo,
      ticketsPrice: this.$store.state.ticketsPriceData,
      totalPrice: 0,
      adultPrice: 0,
      seniorPrice: 0,
      childPrice: 0,
      showReserveInfo: false
    };
  },
  methods: {
    completeBooking() {
      let bookingNumber =
        Math.floor(Math.random() * 1000) +
        "-" +
        Math.floor(Math.random() * 100000);

      let bookingInfo = {
        collection: "confirmBookings",
        bookingNumber: bookingNumber,
        email: this.email,
        telephone: this.telephone,
        movieTitle: this.movieDetail.title,
        ticketsInfo: this.ticketsInfo
      };
      this.$store.dispatch("sendConfirmBookings", bookingInfo);
      this.showReserveInfo = true;
    },
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    calcTicketPrice() {
      let total = 0,
        adult = 0,
        child = 0,
        senior = 0;
      this.ticketsPrice.forEach(price => {
        if (price.id === "adult") {
          adult = this.ticketsInfo.numberOfAdults * price.price;
        } else if (price.id === "child") {
          child = this.ticketsInfo.numberOfChildren * price.price;
        } else if (price.id === "senior") {
          senior = this.ticketsInfo.numberOfSeniors * price.price;
        }
      });
      total = adult + child + senior;
      this.totalPrice = total;
      this.adultPrice = adult;
      this.seniorPrice = senior;
      this.childPrice = child;
    },
    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug == this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    }
  },
  created() {
    this.$store.dispatch("getAuditoriums");
    this.calcTicketPrice();
    this.getMovie();
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
  margin: 2% auto 0 auto;
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