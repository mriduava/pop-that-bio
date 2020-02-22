<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4>Reservation</h4>
    </div>
    <hr class="hr-style" />
    <div class="reserve-info">
      <div class="movie-info">
        <div class="movie-image">
          <img :src="movieDetail.image" alt="pop-that-bio" />
        </div>
        <div class="movie-text">
          <h5>{{movieDetail.title}}</h5>
          <h6>
            Datum:
            <span>{{reserveInfo.showTime.dateName}}, {{reserveInfo.showTime.date}}/{{reserveInfo.showTime.month}}</span>
          </h6>
          <h6>
            Tid:
            <span>{{reserveInfo.showTime.time.time}}</span>
          </h6>
          <h6>
            Salongen:
            <span>{{reserveInfo.auditorium}}</span>
          </h6>
          <h6>
            Platser:
            <span>{{reservedSeats.join(', ')}}</span>
          </h6>
        </div>
      </div>
      <div class="ticket-details">
        <div class="ticket-info">
          <h6>{{ticketsInfo.totalTickets}} x Biljetter</h6>
          <h6>{{totalPrice}} kr</h6>
        </div>
        <div class="ticket-info grey-text" v-if="ticketsInfo.numberOfAdults!==0">
          <p>{{ticketsInfo.numberOfAdults}} x Vuxen</p>
          <p>{{adultPrice}} kr</p>
        </div>
        <div class="ticket-info grey-text" v-if="ticketsInfo.numberOfSeniors!==0">
          <p class="text-grey">{{ticketsInfo.numberOfSeniors}} x Pensionär</p>
          <p>{{seniorPrice}} kr</p>
        </div>
        <div class="ticket-info grey-text" v-if="ticketsInfo.numberOfChildren!==0">
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
              <input id="icon_telephone" type="tel" class="validate" v-model="telephone" />
              <label for="icon_telephone">Telefonnummer</label>
            </div>
            <div class="input-field">
              <input id="email" type="email" class="validate" v-model="email" />
              <label for="email" :class="{active: email !== null}">E-post</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="buttons">
      <router-link :to="'/movies/' + movieDetail.slug + '/ticket/seatsplan'">
        <button class="modal-trigger btn btn-small waves-effect waves-light">Tillbaka</button>
      </router-link>
      <button
        class="btn btn-small waves-effect waves-light"
        :class="{disabled: telephone === '' || email === ''}"
        @click="completeBooking()"
      >Reservera</button>
    </div>

    <div v-if="showModal" class="pop-alert">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  <h5 class="pink-text">OBS!!</h5>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <p class="pink-text">{{alert}}</p>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="showModal = false">OK</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import uuid from "uuid/v4";
import { db } from "@/firebase/firebase.js";

export default {
  name: "reservation",
  data() {
    return {
      telephone: "",
      email: this.$store.state.userEmail,
      userId: this.$store.state.userId,
      pickTime: this.$store.state.beforeBooking.timeStamp,
      auditorium: this.$store.state.reserveInfo.auditorium,
      reservedSeats: this.$store.state.mySeats,
      confBookings: this.$store.state.confBookingsData,
      movies: this.$store.getters.movies,
      movieDetail: [],
      reserveInfo: this.$store.state.reserveInfo,
      ticketsInfo: this.$store.state.ticketsInfo,
      ticketsPrice: this.$store.state.ticketsPriceData,
      isSeatTaken: false,
      totalPrice: 0,
      adultPrice: 0,
      seniorPrice: 0,
      childPrice: 0,
      alert: "",
      showModal: false
    };
  },
  methods: {
    sendBookingInfo() {
      let bookingNumber =
        Math.floor(Math.random() * 1000) +
        "-" +
        Math.floor(Math.random() * 100000);
      let bookingId = uuid();
      let bookingInfo = {
        bookingId: null,
        bookingNumber: bookingNumber,
        email: this.email,
        telephone: this.telephone,
        movieTitle: this.movieDetail.title,
        showTime: this.pickTime,
        auditorium: this.auditorium,
        ticketsInfo: this.ticketsInfo,
        reservedSeats: this.reservedSeats
      };
      if (this.userId !== null) {
        bookingInfo.bookingId = this.userId;
      } else {
        bookingInfo.bookingId = bookingId;
        this.$store.state.bookingId = bookingId;
      }
      db.collection("bookings").add(bookingInfo);
    },
    checkBookedSeats() {
      let reservedSeats = [];
      db.collection("bookings").onSnapshot(snap => {
        let updatedSeats = snap.docChanges();
        updatedSeats.forEach(bookings => {
          let booking = bookings.doc.data();
          if (
            booking.movieTitle === this.movieDetail.title &&
            booking.showTime === this.pickTime
          ) {
            reservedSeats.splice(reservedSeats, 0, ...booking.reservedSeats);
          }
        });
      });
      for (let i = 0; i < reservedSeats.length; i++) {
        if (this.reservedSeats.indexOf(reservedSeats[i] > -1)) {
          this.isSeatTaken = true;
          break;
        }
      }      
    },
    completeBooking() {
      this.checkBookedSeats();
      if (!this.isSeatTaken) {
        this.sendBookingInfo();
        this.$router.push({
          path:
            "/movies/" +
            this.movieDetail.slug +
            "/ticket/seatsplan/reservation/confirm"
        });
        this.alert = "";
      } else {
        this.alert = `Förlåt! Din valda plats har tagits!
        Snälla, välj en annan plats.`;
        this.showModal = true;
      }
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
    this.calcTicketPrice();
    this.getMovie();
  },
  watch: {
    // isSeatTaken() {
    //   this.checkBookedSeats();
    // },
    alert() {
      this.completeBooking();
    },
    userId() {
      this.sendBookingInfo();
    }
  }
};
</script>

<style lang="css" scoped>
.container-fluid {
  position: relative;
  top: -50px;
  padding-bottom: 5%;
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
  color: #9b9b9b;
  margin-top: 4.5%;
  padding: 0;
}
.movie-text h5 {
  color: rgb(204, 9, 113);
}
.movie-text span {
  color: #282828;
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
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  padding: 4%;
  font-size: 20px;
  position: relative;
  top: -40px;
  border-radius: 50%;
  color: #fff;
  background: rgba(202, 8, 112, 0.692);
}

.modal-default-button:hover{
  cursor: pointer;
  color: rgba(202, 8, 112, 0.692);
  background: #fff;
  border: 1px solid rgba(202, 8, 112, 0.692);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* RESPONSIVE STYLE*/
@media (min-width: 310px) and (max-width: 568px) {
  .movie-info {
    width: 280px;
    margin: 1% auto;
  }
  .movie-image{
    margin-top: 3.2%;
  }
  .movie-text {
    margin-top: 0%;
    padding: 0;
  }
  .ticket-info,
  .price-info {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 280px;
  }
  .input-field,
  .buttons {
    width: 280px;
  }
}
</style>