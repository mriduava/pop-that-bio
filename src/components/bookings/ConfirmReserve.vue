<template>
  <div class="container-fluid">
    <div class="row loading-img" v-if="loading">
      <div class="col s6 offset-m3">
        <div class="loading">
          <img src="../../assets/images/loading.gif" alt="loading" width="100%" />
        </div>
      </div>
    </div>

    <div class="row reserve-info" v-else>
      <div class="col s12" id="reservation">
        <h4 class="title-text center">Reservation</h4>
        <hr class="hr-style" />

        <div class="row book-info">
          <div class="col s6 book-title">
            <p>Bokning:</p>
          </div>
          <div class="col s6 book-text">
            <p>{{myBookingInfo[0].bookingNumber}}</p>
          </div>
        </div>

        <div class="row book-info">
          <div class="col s6 book-title">
            <p class="movie-title">Filmtitel:</p>
          </div>
          <div class="col s6 book-text">
            <p class="movie-text">{{myBookingInfo[0].movieTitle}}</p>
          </div>
        </div>

        <div class="row book-info">
          <div class="col s6 book-title">
            <p>Dag & tid:</p>
          </div>
          <div class="col s6 book-text">
            <p>{{formatTime(myBookingInfo[0].showTime)}}</p>
          </div>
        </div>

        <div class="row book-info">
          <div class="col s6 book-title">
            <p>Salong:</p>
          </div>
          <div class="col s6 book-text">
            <p>{{myBookingInfo[0].auditorium}}</p>
          </div>
        </div>

        <div class="row book-info">
          <div class="col s6 book-title">
            <p>Platser:</p>
          </div>
          <div class="col s6 book-text">
            <p>{{myBookingInfo[0].reservedSeats.join(', ')}}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 tack center">
          <h6>Tack så mycket!</h6>
        </div>
      </div>

      <div class="row">
        <div class="col s12 center">
          <button
            class="btn waves-effect waves-pink btn-flat printout center"
            @click="printMyReservation('reservation')"
          >SKRIV UT</button>
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
      userId: this.$store.state.userId,
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
      return moment(time).format("lll");
    },
    printMyReservation(e) {
      let text = document.getElementById(e);
      let printText = text.innerHTML;
      let page = window.open("", "", "height=600, width=900");
      page.document.write("<html>");
      page.document.write("<head>");
      page.document.write("<style>");
      page.document.write(`*{margin:0; padding:0;}
      h4{font-size: 1.9rem;}.book-info{color: #7e7e7e; display: flex;
      flex-wrap: nowrap;justify-content: center;}.movie-title{
      padding-top: 7px;}.book-text{color: #282828; padding-left: 10px;}
      .movie-text{marign-top: 15px;font-size: 1.6rem;color: rgb(204, 9, 113);}`);
      page.document.write("</style>");
      page.document.write("</head>");
      page.document
        .write(`<body style="width: 90vw; margin: 0 auto; text-align:center; 
      display:flex; flex-direction: column;"><h1 style="font-family: borntogrille; 
      margin-top: 25px; padding: 5px 0;color: rgba(184, 10, 103, 0.993); 
      ">POP THAT BIO</h1>`);
      page.document.write(`${printText}`);
      page.document.write(`<hr style="width: 200px; margin: 20px auto 2px auto;">
      <h5 style="padding:0; margin:0; color: #616A6B;">&copy; 2020 POPHTATBIO</h5>
      <h6 style="padding:0; margin:0; color: rgba(184, 10, 103, 0.993)">
      www.popthatbio.now.sh</h6>`);
      page.document.write("</body></html>");
      page.document.close();
      page.print();
    },
    getBookingsInfo() {
      this.loading = true;
      db.collection("bookings")
        .get()
        .then(snap => {
          snap.forEach(info => {
            let usersData = info.data();
            if (
              (usersData.bookingId === this.bookingId ||
              usersData.bookingId === this.userId) && 
              usersData.movieTitle === this.movieDetail.title
            ) {
              this.myBookingInfo.push(usersData);
              this.loading = false;
            }
          });
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
    this.myBookingInfo.push;
  },
  watch: {
    bookingId() {
      this.getBookingsInfo();
    },
    userId() {
      this.getBookingsInfo();
    }
  }
};
</script>

<style lang="css" scoped >
.container-fluid {
  position: relative;
  top: 20px;
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 90%,
    rgb(219, 166, 195)
  );
}
.reserve-info,
.loading-img {
  position: relative;
  top: -80px;
  padding-bottom: 5.5%;
}
.loading {
  width: 350px;
  margin: 0 auto;
}
.title-text {
  color: rgb(204, 9, 113);
}
.book-info {
  margin: 0;
}
.book-title,
.book-text {
  font-size: 1.2rem;
}
.book-title {
  color: #7e7e7e;
  display: flex;
  justify-content: flex-end;
}
.book-text {
  color: #282828;
}
.movie-title {
  padding-top: 1.5%;
}
.movie-text {
  padding-left: 0;
  padding-top: 1%;
  font-size: 1.4rem;
  color: rgb(204, 9, 113);
}
.tack h6 {
  margin-top: 5%;
  font-size: 1.5rem;
  color: rgb(204, 9, 113);
}
.printout {
  padding-top: 0;
  font-size: 1.2rem;
  color: rgb(204, 9, 113);
  border: 1px solid rgb(204, 9, 113);
  background: none;
}
.printout:hover {
  color: #fff;
  background: rgb(204, 9, 113);
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