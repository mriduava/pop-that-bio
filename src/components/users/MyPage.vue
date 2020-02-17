<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row" v-if="loading">
        <div class="col s6 offset-m3">
          <div class="loading">
            <img src="../../assets/images/loading.gif" alt="loading" width="100%" />
          </div>
        </div>
      </div>

      <div class="user-info" v-else>
        <div class="row">
          <h4>
            Välkommen
            <span>{{userInfo[0].name}}</span>
          </h4>
          <hr class="hr-style" />
          <p>
            Du är inloggad som
            <span>{{userInfo[0].email}}</span>
          </p>
          <div class="col s12"></div>
        </div>

        <div class="row">
          <h5>Dina kommande visningar</h5>
          <hr class="hr-style" />
          <div class="col s12 m4 booking-cards" v-for="(booking, i) in upcomingBookings" :key="i">
            <div class="card">
              <div
                class="card-content"
                :class="{ 'yellow accent-1': formatToDay(booking.showTime) === getToday()}"
              >
                <span class="card-title activator grey-text text-darken-4">{{booking.movieTitle}}</span>
                <hr />
                <p>
                  Bokning:
                  <span>{{booking.bookingNumber}}</span>
                </p>
                <p>
                  Dag & Tid:
                  <span>{{formatTime(booking.showTime)}}</span>
                </p>
                <p>
                  Salong:
                  <span>{{booking.auditorium}}</span>
                </p>
                <p>
                  Antal biljetter:
                  <span>{{booking.ticketsInfo.totalTickets}}</span>
                </p>
                <p>
                  Platser:
                  <span>{{booking.reservedSeats}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <h5>Tidigare visningar</h5>
          <hr class="hr-style" />
          <div class="col s12 m4 booking-cards" v-for="(booking, i) in bookingsHistory" :key="i">
            <div class="card history">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{booking.movieTitle}}</span>
                <hr />
                <p>
                  Bokning:
                  <span>{{booking.bookingNumber}}</span>
                </p>
                <p>
                  Dag & Tid:
                  <span>{{formatTime(booking.showTime)}}</span>
                </p>
                <p>
                  Salong:
                  <span>{{booking.auditorium}}</span>
                </p>
                <p>
                  Antal biljetter:
                  <span>{{booking.ticketsInfo.totalTickets}}</span>
                </p>
                <p>
                  Platser:
                  <span>{{booking.reservedSeats}}</span>
                </p>
              </div>
            </div>
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
  data() {
    return {
      loading: false,
      myBookings: [],
      upcomingBookings: [],
      bookingsHistory: [],
      userId: this.$store.state.userId,
      userInfo: []
    };
  },
  methods: {
    formatTime(time) {
      return moment(time).format("lll");
    },
    formatToDay(time) {
      return moment(time).format("LL");
    },
    getToday() {
      return moment().format("LL");
    },
    getUsersInfo() {
      this.loading = true;
      db.collection("users")
        .doc(this.userId)
        .get()
        .then(info => {
          this.userInfo.push(info.data());
          this.loading = false;
        });
    },
    getBookingsInfo() {
      this.loading = true;
      db.collection("bookings")
        .get()
        .then(snap => {
          snap.forEach(info => {
            let usersData = info.data();
            if (usersData.bookingId == this.userId) {
              this.myBookings.push(usersData);
              this.loading = false;
            }
          });
          this.sortBookings();
        });
    },
    sortBookings() {
      let today = Date.now();
      this.myBookings.forEach(booking => {
        if (booking.showTime != undefined) {
          if (booking.showTime > today) {
            this.upcomingBookings.push(booking);
          } else {
            this.bookingsHistory.push(booking);
          }
        }
      });
    }
  },
  created() {
    this.getUsersInfo();
    this.getBookingsInfo();
  }
};
</script>

<style lang="css" scoped>
.container-fluid {
  padding-bottom: 7%;
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 90%,
    rgb(219, 166, 195)
  );
}

.container {
  position: relative;
  padding: 0 1%;
  padding-top: 15px;
}

.user-info h4,
h5 {
  color: #9b9b9b;
}
.user-info h4 > span {
  text-transform: capitalize;
  color: rgb(204, 9, 113);
}

.user-info p > span {
  color: rgb(43, 174, 226);
}

.booking-cards {
  margin: 0 !important;
  padding-left: 0 !important;
  left: 0;
}

.card > .card-content {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  color: #282828;
  background: #aeffb5;
  border: 1px solid rgb(255, 169, 215);
}
.card-content p {
  color: #757575;
}

.card-content p > span {
  color: #0004f7;
}

.card.history div {
  background: rgb(255, 193, 193);
}

hr {
  margin-bottom: 10px;
}

.hr-style {
  border: 0;
  min-width: 50%;
  max-width: 1%;
  height: 1px;
  margin: 0 auto 10px 0;
  background: #fff;
  background: -webkit-linear-gradient(
    left,
    rgb(204, 9, 113) 0,
    rgb(255, 255, 255) 90%
  );
}
</style>