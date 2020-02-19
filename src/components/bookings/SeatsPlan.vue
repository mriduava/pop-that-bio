<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4 class>Platser</h4>
    </div>
    <hr class="hr-style" />
    <div class="screen">
      <div class="text">
        <h6 class="screen-text">{{auditoriumName}}</h6>
        <div class="screen-seat" v-for="(seat, i) in mySelection" :key="i">
          <p>{{seat}}</p>
        </div>
      </div>
    </div>
    <div class="screen-shadow">
      <h6 class="shadow-text">{{auditoriumName}}</h6>
      <div class="shadow-seat" v-for="(seat, i) in mySelection" :key="i">
        <p>{{seat}}</p>
      </div>
    </div>
    <div class="seats-info">
      <div class="gray-circle"></div>
      <div>
        <span>Ledig</span>
      </div>
      <div class="green-circle green"></div>
      <div>
        <span>Mina val</span>
      </div>
      <div class="purple-circle"></div>
      <div>
        <span>Upptagen</span>
      </div>
    </div>

    <div class="grid">
      <div class="row seats-grid" v-for="(blockRow, row) in seatsGrid" :key="row">
        <div
          class="seats center"
          style="color: #e88; font-size: 0.7rem"
          v-for="(block, col) in blockRow"
          :key="col"
          @mouseover="showPositionsOnHover(row, col)"
          @click="selectSeats(row, col)"
        >
          <div
            class="pre-selected"
            v-for="(seatNum, i) in preSelected"
            :key="i"
            :class="{'pink': block == seatNum}"
          >{{block}}</div>
        </div>
      </div>
    </div>

    <div class="row seat-position">
      <h6 v-if="message.length == 0">Parkett, rad {{seatHover.x}}, plats {{seatHover.y}}</h6>
      <h6 v-else>{{message}}</h6>
    </div>

    <div class="buttons">
      <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
        <button class="btn btn-small waves-effect waves-light">Tillbaka</button>
      </router-link>
      <button
        class="btn btn-small waves-effect waves-light"
        :class="{ disabled: counter !== totalSeats}"
        @click.prevent="goToReservation()"
      >Fortsätt</button>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/firebase.js";
export default {
  data() {
    return {
      auditoriums: this.$store.state.auditoriums,
      auditoriumId: this.$store.state.auditoriumId,
      auditoriumName: this.$store.state.reserveInfo.auditorium,
      seatsPerRow: [],
      seatsGrid: [],
      movies: this.$store.getters.movies,
      movieDetail: [],
      pickMovie: this.$store.state.beforeBooking.movieTitle,
      pickTime: this.$store.state.beforeBooking.timeStamp,
      totalSeats: this.$store.state.ticketsInfo.totalTickets,
      counter: 0,
      message: "",
      seatHover: { x: 0, y: 0 },
      preSelected: [],
      mySelection: [],
      myUserId: null,
      isClicked: false
    };
  },
  methods: {
    getAuditorium(id) {
      this.auditoriums.forEach(e => {
        if (id === e.id) {
          this.seatsPerRow = e.seatsPerRow;
        }
      });
    },
    createSeatsGrid() {
      for (let i = 0; i < this.seatsPerRow.length; i++) {
        let rows = new Array(this.seatsPerRow[i]);
        this.seatsGrid.push(rows);
      }
      let num = 1;
      for (let i = 0; i < this.seatsGrid.length; i++) {
        for (let j = 0; j < this.seatsGrid[i].length; j++) {
          this.seatsGrid[i][j] = num;
          num++;
        }
      }
    },
    selectSeats(x, y) {
      let seatNum = this.seatsGrid[x][y];
      let preBooked = false;
      for (let i = 0; i < this.preSelected.length; i++) {
        if (this.preSelected[i] === seatNum) {
          preBooked = true;
          this.message = "Platsen är uptagna!";
        }
      }
      let myBooked = false;
      let seatIndex = 0;
      for (let i = 0; i < this.mySelection.length; i++) {
        if (this.mySelection[i] === seatNum) {
          myBooked = true;
          seatIndex = i;
        }
      }
      if (this.counter < this.totalSeats && !preBooked && !myBooked) {
        event.target.classList.add("selected");
        this.mySelection.push(seatNum);
        this.counter++;
      } else if (!preBooked && myBooked) {
        event.target.classList.remove("selected");
        this.mySelection.splice(seatIndex, 1);
        this.counter--;
      }
    },
    showPositionsOnHover(x, y) {
      let seat = this.seatsGrid[x][y];
      this.message = "";
      this.seatHover = { x: x + 1, y: seat };
    },
    checkBookedSeats(){
      let selectedSeatsArr = this.preSelected
      db.collection('bookings').onSnapshot(snap=>{
        let updatedSeats = snap.docChanges()
        updatedSeats.forEach(bookings=>{
          let booking = bookings.doc.data()
          if (booking.movieTitle === this.pickMovie &&
              booking.showTime === this.pickTime) {
            selectedSeatsArr.splice(selectedSeatsArr, 0, ...booking.reservedSeats)
          }
        })
      })
    },
    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug == this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    },
    goToReservation() {
      this.$store.state.mySeats = this.mySelection;
      this.$router.push({
        path:
          "/movies/" + this.movieDetail.slug + "/ticket/seatsplan/reservation"
      });
    }
  },
  created() {
    this.getAuditorium(this.auditoriumId);
    this.createSeatsGrid();
    this.checkBookedSeats();
    this.$store.dispatch("getPriceData");
    this.getMovie();
  },
  watch: {
    'beforeBookings'(){
      this.getBeforeBooking()
    }
  },
};
</script>

<style lang="css" scoped>
.container-fluid {
  position: relative;
  top: -60px;
}
.title-text {
  text-align: center;
  color: rgb(204, 9, 113);
}
.screen {
  position: relative;
  top: -20px;
  width: 320px;
  height: 140px;
  background: #707070;
  border-top: 3px solid #0e0d0d;
  margin: 0 auto;
  padding-bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(-45deg);
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
}
.screen-shadow {
  width: 320px;
  height: 100px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  top: -52.5px;
  clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);
  background: rgb(10, 10, 10);
  background: -webkit-linear-gradient(to top, rgba(51, 50, 51, 0.5), #fbd3e9);
  background: linear-gradient(
    to bottom,
    rgba(51, 50, 51, 0.6) 10%,
    rgba(121, 121, 121, 0.9) 10%,
    rgba(206, 206, 206, 0.01) 70%
  );
  text-align: center;
}
.screen-shadow .shadow-text {
  font-size: 1.7rem;
  color: #c9c8c8;
  transform: rotateX(150deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 95%;
}
.screen .text {
  color: rgb(255, 255, 255);
  z-index: 9999;
  text-shadow: 5px 5px 10px #979797;
}
.screen .screen-text {
  font-size: 1.9rem;
  transform: rotateX(30deg);
}
.screen-seat {
  position: relative;
  font-size: 1rem;
  transform: rotateX(30deg);
  margin: 0 1%;
  display: inline-block;
}
.shadow-seat {
  position: relative;
  display: inline-block;
  top: -340px;
  margin: 0 1%;
  font-size: 0.7rem;
  color: #cccbcb;
  transform: rotateX(150deg);
}
.shadow-seat p {
  display: inline;
  position: relative;
}
/* SEATS INFO */
.seats-info {
  display: flex;
  justify-content: center;
  margin: 0 auto 2.4% auto;
  position: relative;
  top: -89px;
}
.gray-circle,
.purple-circle,
.green-circle {
  margin: 0 0.5% 0 0.5%;
  width: 20px;
  height: 20px;
  background: #ddd;
  border: 1px solid #8e8e8e;
  border-radius: 50%;
}
.gray-circle {
  background: #ddd;
}
.purple-circle {
  background: rgb(204, 9, 113);
}
.blue-circle {
  background: rgba(111, 111, 241, 0.699);
}
/* STYLE TO GRID */
.seats-grid {
  display: flex;
  justify-content: center;
  position: relative;
  top: -79px;
}
.all-blocks {
  position: relative;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.seats {
  justify-content: center;
  width: 23px;
  height: 20px;
  margin: 0 3px;
  border: 1px solid #8e8e8e;
  background: #ddd;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.seats:hover {
  cursor: pointer;
  background: rgb(204, 9, 113);
}
.selected {
  background: rgb(0, 250, 104);
}
.seat-position {
  text-align: center;
  position: relative;
  top: -86px;
}
.pre-selected {
  width: 21px;
  height: 18px;
  position: absolute;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  top: -69px;
  max-width: 350px;
}
.btn {
  background: rgba(202, 8, 112, 0.692);
}
.hr-style {
  border: 0;
  min-width: 90%;
  max-width: 1%;
  height: 1px;
  margin: 0 auto 10px auto;
  background: #fff;
  background: -webkit-linear-gradient(left, #fff, rgb(204, 9, 113), #fff);
}
@media (min-width: 310px) and (max-width: 568px) {
  .buttons {
    max-width: 280px;
  }
}
</style>