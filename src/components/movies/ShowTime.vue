<template>
  <div class="container">
    <div class="title-text">
      <h4 class>Boka biljetter</h4>
      <hr class="hr-style" />
    </div>

    <div class="row">
      <div class="col s12  menu-selection">
        <h5  @click="showMenu = !showMenu"><i class="fas fa-bars"></i></h5>
        <h5>{{chosenDate.date}}/{{chosenDate.month}} - {{ chosenDate.dateName }}</h5>
      </div>
    </div>

    <div class="dropdown-items" v-if="showMenu">
      <ul>
        <li
          v-for="(date, i) in dates"
          :key="i"
          @click="updateChosenDate(date.index)"
        >{{ date.date }} / {{ date.month}} - {{ date.dateName}}</li>
      </ul>
    </div>

    <div class="row">
      <div class="col s12">    
      <ul style="list-style-type:none;">
        <li class="show-time" v-for="(screenTime, i) in screenTimes" :key="i">
          {{ screenTime.time }} |
          {{ screenTime.auditorium }}
          <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
            <button
              class="btn btn-small pink darken-1 waves-effect"
              @click="sendBookingDetails(screenTime)"
            >Boka</button>
          </router-link>
        </li>
      </ul>
      </div>
    </div>

  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "showtime",
  data() {
    return {
      dates: [
        {
          index: 0,
          dateName: "Idag",
          date: this.getCorrectDay(1),
          month: this.getCorrectMonth(1)
        },
        {
          index: 1,
          dateName: "Imorgon",
          date: this.getCorrectDay(2),
          month: this.getCorrectMonth(2)
        },
        {
          index: 2,
          dateName: this.getCorrectDayOfWeek(3),
          date: this.getCorrectDay(3),
          month: this.getCorrectMonth(3)
        }
      ],

      chosenDate: {
        dateName: "Idag",
        date: this.getCorrectDay(1),
        month: this.getCorrectMonth(1),
        time: ""
      },
      showMenu: false,
      movies: this.$store.getters.movies,
      movieDetail: [],
      screenings: this.$store.state.scrData,
      screeningDetails: [],
      screenTimes: [],
      chosenAuditorium: ""
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    customMomentTime(time, format) {
      return moment(time).format(format);
    },
    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug == this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    },
    getScreening() {
      this.screenings.forEach(e => {
        if (e.movieId == this.movieDetail.id) {
          this.screeningDetails.push(e);
        }
      });
    },
    getCorrectDay(index) {
      let date = this.getSpecifiedDate(index);
      return date.getDate();
    },
    getCorrectMonth(index) {
      let date = this.getSpecifiedDate(index);
      return date.getMonth() + 1;
    },
    getCorrectDayOfWeek(index) {
      let date = this.getSpecifiedDate(index);

      switch (date.getDay()) {
        case 1:
          return "Måndag";
        case 2:
          return "Tisdag";
        case 3:
          return "Onsdag";
        case 4:
          return "Torsdag";
        case 5:
          return "Fredag";
        case 6:
          return "Lördag";
        case 0:
          return "Söndag";
      }
    },
    getSpecifiedDate(index) {
      let today = new Date();
      let tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + (index - 1));

      return tomorrow;
    },
    updateChosenDate(index) {
      this.chosenDate = this.dates[index];
      this.showMenu = false;
    },
    addScreenTimes() {
      this.screenTimes = [];
      let chosenMonth = this.chosenDate.month;
      let chosenDay = this.chosenDate.date;
      for (let s in this.screeningDetails) {
        if (
          this.customMomentTime(
            this.screeningDetails[s].startTime.toMillis(),
            "MM"
          ) == chosenMonth &&
          this.customMomentTime(
            this.screeningDetails[s].startTime.toMillis(),
            " D"
          ) == chosenDay
        ) {
          this.screenTimes.push({
            time: this.customMomentTime(
              this.screeningDetails[s].startTime.toMillis(),
              "HH:mm"
            ),
            auditorium: this.convertIdToAuditioriumName(
              this.screeningDetails[s].auditoriumId
            ),
            auditoriumId: this.screeningDetails[s].auditoriumId,
            timeStamp: this.screeningDetails[s].startTime.toMillis()
          });
        }
      }
      this.sortScreenTimes();
    },
    sortScreenTimes() {
      this.screenTimes.sort(function(a, b) {
        var aNumber = parseInt(a.time);
        var bNumber = parseInt(b.time);
        return aNumber - bNumber;
      });
    },

    convertIdToAuditioriumName(id) {
      id = id.replace(" ", "");
      switch (id) {
        case "ZsZnuLCgGA5gjHIvZUVa":
          return "Lilla Salongen";
        case "Cw0BLCXOYyMpoXW8OAiL":
          return "Stora Salongen";
        default:
      }
    },
    sendBookingDetails(screenTime) {
      this.chosenDate.time = screenTime;
      this.$store.state.reserveInfo.showTime = this.chosenDate;
      this.chosenAuditorium = screenTime.auditorium;
      this.$store.state.reserveInfo.auditorium = this.chosenAuditorium;
      this.$store.state.auditoriumId = screenTime.auditoriumId;
      this.$store.state.beforeBooking.movieTitle = this.movieDetail.title;
      this.$store.state.beforeBooking.timeStamp = screenTime.timeStamp;
    }
  },
  created() {
    this.getMovie();
    this.getScreening();
    this.addScreenTimes();
  },
  watch: {
    chosenDate() {
      this.addScreenTimes();
    }
  }
};
</script>

<style lang="css" scoped>
.title-text {
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding: 1% 0;
  color: rgba(255, 255, 255, 0.733);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.hr-style {
  border: 0;
  min-width: 90%;
  max-width: 100%;
  height: 1px;
  margin: 0 auto 10px auto;
  background: #fff;
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.3),
    #fff,
    rgba(0, 0, 0, 0.3)
  );
}

/*SCREENING SECTION*/

/* .menu {
  width: 70vw;
  position: relative;
  color: #13f7ff;
  top: 20px;
  left: -2px;
  padding: 5px 2.5%;
  display: flex;
  justify-content: left;
  background: rgba(83, 83, 83, 0.1);
} */

.menu-selection{
  display: flex;
  justify-content: left;
}

.menu-selection i {
  color: #00ff4c;
  font-size: 1.5rem;
  margin-right: 25px;
  padding-bottom: 10px;
}

.menu-selection i:hover {
  color: #89fdac;
  cursor: pointer;
}

.dropdown-items {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  top: 150px;
  /* left: 35px; */
  width: 300px;
  margin-left: 1%;
  padding: 1% 3%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: 0.3s;
  -webkit-transition: all 0.3s ease 0s;
}

.dropdown-items li {
  color: rgb(212, 0, 166);
  padding: 1.4% 0;
}

.dropdown-items li:hover {
  background: #ff00aa44;
  cursor: pointer;
  color: rgb(212, 0, 166);
}

.show-time{
  position: relative;
  color: #00ff4c;
  background: #1d1d1d98;
  font-size: 1.5rem;
  margin: 0.2% auto 0 auto;
  padding: 15px 2%;
  display: flex;
  justify-content: space-between;
}

@media (min-width: 310px) and (max-width: 768px) {
  .menu-selection {
    justify-content: left;
    text-align: center;
  }
  .dropdown-items {
    width: 240px;
    z-index: 10;
  }
  .show-time-item {
    width: 76vw;
  }
}
</style>
