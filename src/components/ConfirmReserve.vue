<template>
  <div class="container">
    <div class="row" v-if="loading">
      <div class="col s12">
        <div class="loading">
          <img src="../assets/images/loading.gif" alt="loading" width="100%" />
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col s12">
        <div class="row" id="reservation">
          <h4 class="title-text center">Reservation</h4>
          <hr class="hr-style" />
          <div class="col s12">
            <p class="book-num">
              Bookning nummer:
              <span>{{myBookingInfo[0].bookingNumber}}</span>
            </p>
            <p class="movie-title">
              Film:
              <span>{{myBookingInfo[0].movieTitle}}</span>
            </p>
            <p>
              Dag:
              <span>Dag</span> Tid:
              <span>Tid</span>
            </p>
            <p>
              Salong:
              <span>Salong</span>
            </p>
            <p>
              Platser:
              <span>Platser</span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h6>Tack så mycket!</h6>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <button
              class="btn waves-effect register-button center"
              @click="printMyReservation('reservation')"
            >Skriva ut</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { db } from "@/firebase/firebase.js";
export default {
  name: "reservation",
  data() {
    return {
      bookingId: this.$store.state.bookingId,
      loading: false,
      movies: this.$store.getters.movies,
      movieDetail: [],

      confBookings: this.$store.state.confBookingsData,
      myBookingInfo: [],
      auditoriumInfo: this.$store.state.auditoriumInfo,
      reserveInfo: this.$store.state.reserveInfo
    };
  },
  methods: {
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    printMyReservation(e) {
      let printText = document.getElementById(e).innerHTML;
      let page = window.open("", "", "height=600, width=900");
      page.document.write("<html>");
      page.document
        .write(`<body style="width: 90vw; margin: 10% auto"><h1 style="margin-top: 25px;
          padding: 0;
          color: rgba(184, 10, 103, 0.993); 
          font-family: Times New Roman;"
            >POP THAT BIO</h1>`);
      page.document.write(printText);
      page.document.write(`<hr>
          <h5 style="padding:0; margin:0; color: #616A6B;">&copy; 2020 POPHTATBIO</h5>
          <h6 style="padding:0; margin:0; color: rgba(184, 10, 103, 0.993)">
          www.popthatbio.now.sh</h6>`);
      page.document.write("</body></html>");
      page.document.close();
      page.print();
      this.$router.push({ path: "/" });
    },
    getBookingsInfo() {
      this.loading = true;
      const resData = db.collection("passBookings");
      resData
        .doc(this.bookingId)
        .get()
        .then(doc => {
          let resData = doc.data();
          setTimeout(() => {
            this.myBookingInfo.push(resData);
            this.loading = false;
          }, 500);
        });
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
    this.$store.dispatch("getConfBookings");
    this.getBookingsInfo();
    this.getMovie();
    console.log(this.bookingId);
  },
  watch: {
    bookingId() {
      this.getBookingsInfo();
    }
  }
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: borntogrille;
  src: url("../assets/fonts/borntogrille.otf");
}
#reservation {
  margin-top: 6%;
}

.title-text {
  color: rgb(204, 9, 113);
}

.book-num {
  font-size: 1.2rem;
}
.book-num span {
  font-weight: bold;
}
.movie-title {
  font-size: 1.5em;
}
.movie-title span {
  color: rgb(204, 9, 113);
}

.hr-style {
  border: 0;
  height: 1px;
  margin: 0 0 10px 0;
  background: #fff;
  background-image: -webkit-linear-gradient(
    left,
    rgb(255, 255, 255),
    rgba(184, 10, 103, 0.993),
    rgb(255, 255, 255)
  );
}
</style>