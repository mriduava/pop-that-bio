<template>
  <div class="container-fluid" >
    <div class="title-text">
      <h4 class>Boka biljetter</h4>
      <hr class="hr-style" />
    </div>

    <div class="screenings-section">
      <div class="dates">
        <div class="dropdown-menu">
          <h5 class="selected dropdown item" @click="showMenu = !showMenu">
            {{chosenDate.date}}/{{chosenDate.month}} - {{ chosenDate.dateName }}
            <i
              class="fas fa-chevron-down"
            ></i>
          </h5>
          <div class="dropdown-items" v-if="!showMenu">
            <ul>
              <li
                v-for="(date, i) in dates"
                :key="i"
                @click="updateChosenDate(date.index)"
              >{{ date.date }} / {{ date.month}} - {{ date.dateName}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="available-times" id="showtime">
        <ul style="list-style-type:none;">
          <!-- <li class="show-time-item" v-for="(screeningDetail, i) in screeningDetails" :key="i"> -->
          <li class="show-time-item" v-for="(screenTime, i) in screenTimes" :key="i">
            <!-- {{ screenTime }} | -->
            {{ screenTime.time }} |
            {{ screenTime.auditorium }}
            <!-- {{movieDetail.genre}} -->
            <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
              <button
                @click="sendBookingDetails(screenTime)"
                class="btn btn-small pink darken-1 waves-effect"
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
          dateName: "Today",
          date: this.getCorrectDay(1),
          month: this.getCorrectMonth(1)
        },
        {
          index: 1,
          dateName: "Tomorrow",
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
        dateName: "Today",
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
          //this.screeningDetails = e;

          this.$store.state.reserveInfo.showTime = e.startTime;
        }
        if (e.auditoriumId === this.auditoriumDetail.id) {
          this.$store.state.auditoriumInfo.name = this.auditoriumDetail.name;
          console.log(this.$store.state.auditoriumInfo.name);
        }
      });
    },

    getCorrectDay(index) {
      let date = this.getSpecifiedDate(index);
      return date.getDate();
      //return ("0" + date.getDate()).slice(-2);
    },
    getCorrectMonth(index) {
      let date = this.getSpecifiedDate(index);
      return date.getMonth() + 1;
      //return ("0" + (date.getMonth() + 1)).slice(-2);
    },

    getCorrectDayOfWeek(index) {
      let date = this.getSpecifiedDate(index);

      switch (date.getDay()) {
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        case 7:
          return "Sunday";
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
          window.console.log(
            "audi ID: " + this.screeningDetails[s].auditoriumId
          );
          this.screenTimes.push({
            time: this.customMomentTime(
              this.screeningDetails[s].startTime.toMillis(),
              "HH:mm"
            ),
            auditorium: this.convertIdToAuditioriumName(
              this.screeningDetails[s].auditoriumId
            )
          });
        }
      }
    },

    convertIdToAuditioriumName(id) {
      id = id.replace(" ", "");

      switch (id) {
        case "ZsZnuLCgGA5gjHIvZUVa":
          return "Lilla Salongen";
        case "Cw0BLCXOYyMpoXW8OAiL":
          return "Stora Salongen";
        default:
          window.console.log("Failed to convert auditorium ID!");
      }
    },

    sendBookingDetails(screenTime) {
      this.chosenDate.time = screenTime;
      //window.console.log("Send Booking Details for: " + this.chosenDate)
      this.$store.state.reserveInfo.showTime = this.chosenDate;
      this.chosenAuditorium = screenTime.auditorium;
      //window.console.log("Audi " + this.chosenAuditorium)
      this.$store.state.reserveInfo.auditorium = this.chosenAuditorium;
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
.container-fluid {
  background: #fff;
  margin: 0 auto;
  position: relative;
}

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
  min-width: 99%;
  max-width: 1%;
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

.dropdown-menu{
  margin: 0 auto;
  position: relative;
  color: #13f7ff;
  top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 5px 2.2%;
  max-width: 59vw;
  background: rgba(83, 83, 83, 0.1);
  /* border: 0.01rem solid rgba(255, 166, 248, 0.1); */
}

.selected-dropdown{
  display: flex;
  justify-content: left;
}

.dropdown-menu i{
  color: #00ff4c;
  font-size: 1.5rem;
  margin-right: 25px;
}

.selected-dropdown:hover{
  cursor: pointer;
}

.dropdown-items{
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  top: 65px;
  left: 0;
  width: 300px;
  padding: 3% 3%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: .3s;
  -webkit-transition: all 0.3s ease 0s;
}

.dropdown-items li{
  color:  rgb(212, 0, 166);
  padding: 1.1% 0;
}

.dropdown-items li:hover{
  background:  #ff00aa44;
  cursor: pointer;
  color: rgb(212, 0, 166);
}

.available-times{
  display: flex;
  justify-content: center;
  margin: 1% 0;
}
.show-time-item{
  position: relative;
  top: 15px;
  color: #00ff4c;
  background: #1d1d1d98;
  font-size: 1.5rem;
  margin: 2% auto 0 auto;
  padding: 15px 2%;
  display: flex;
  justify-content: space-between;
  width: 59vw;
  /* border: 0.01rem solid rgba(255, 166, 248, 0.2); */
}

@media (min-width: 310px) and (max-width: 812px) {
  .dropdown-menu{
    /* justify-content: center;
    text-align: center; */
    max-width: 90vw;
    padding-left: 3%;
  }
  .show-time-item{
    width: 85vw;
  }
}


</style>
