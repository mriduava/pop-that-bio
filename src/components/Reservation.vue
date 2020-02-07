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
          <h6>Date: {{reserveInfo.showTime.dateName}}, {{reserveInfo.showTime.date}}/{{reserveInfo.showTime.month}}</h6>
          <h6>Tid: {{reserveInfo.showTime.time.time}}</h6>
          <h6>{{reserveInfo.auditorium}}</h6>
        </div>
      </div>

      <div class="ticket-details">
        <div class="ticket-info">
          <h6>{{ticketsInfo.totalTickets}} x Biljetter</h6>

          <h6>{{reserveInfo.ticketPrice}} kr</h6>
        </div>

        <div class="price-info">
          <h6>Total</h6>
          <h6>Price</h6>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="user-info">
        <form>
          <div class="row">
            <!-- <div class="input-field col x6 s6 m6">
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">Ditt namn</label>
            </div> -->
            <div class="input-field">
              <input id="icon_telephone" type="tel" class="validate" value required autofocus v-model="telephone" />
              <label for="icon_telephone">Telefonnummer</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field">
              <input id="email" type="email" class="validate" value required autofocus v-model="email" />
              <label for="email">E-post</label>
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
      <ConfirmReserve/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ConfirmReserve from '@/components/ConfirmReserve'
export default {
  name: "reservation",
  components:{
    ConfirmReserve
  },
  data() {
    return {
      telephone: '',
      email: '',
      movies: this.$store.getters.movies,
      movieDetail: [],
      reserveInfo: this.$store.state.reserveInfo,
      ticketsInfo: this.$store.state.ticketsInfo,
      showReserveInfo: false
    };
  },
  methods: {
    completeBooking() {
      this.showReserveInfo = true;
      let bookingNumber = Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 100000);
      let ticketsInfo = this.ticketsInfo;
      let bookingInfo = {
        collection: "bookings",
        bookingNumber: bookingNumber,
        numberOfAdults: ticketsInfo.numberOfAdults,
        numberOfChildren: ticketsInfo.numberOfChildren,
        numberOfSeniors: ticketsInfo.numberOfSeniors
      };
      this.$store.dispatch("sendToFirebase", bookingInfo);
    },
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
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
  display: flex;
  justify-content: center;
}

.movie-image {
  width: 150px;
  padding: 0;
  margin-right: 3%;
}

.movie-image img {
  width: 100%;
  display: block;
  overflow: hidden;
}

.movie-text{
  margin-top: 4.5%;
  padding: 0;
}
.ticket-details{
  margin-top: 2%;
}
.ticket-info,
.price-info {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 356px;
}

.clear {
  clear: both;
  display: block;
}

.user-info {
  display: flex;
  justify-content: center;
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
</style>