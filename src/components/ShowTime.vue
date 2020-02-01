<template>
  <div class="container-fluid" id="showtime">

    <div class="row">
      <div class="col s12">
        <div class="title-text">
          <h4 class>Boka Biljetter</h4>
          <hr class="hr-style" />
        </div>
      </div>
    </div>
    
  

    <div class="screenings-section">
      <div class="dates">
        <div class="dropdown-menu">
          <h5 class="selected dropdown item" @click="showMenu = !showMenu">
            {{chosenDate.day}}/{{chosenDate.month}} - {{ chosenDate.dateName }}
            <i
              class="fas fa-chevron-down"
            ></i>
          </h5>
          <div class="dropdown-items" v-if="!showMenu">
            <ul>
              <li
                v-for="(date, index) in dates" :key="index"
                @click="updateChosenDate(date.index)"
              >{{ date.day }} / {{ date.month}} - {{ date.dateName}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="available-times">
        <ul style="list-style-type:none;">
          <li class="show-time-item" v-for="screenTime in screenTimes" :key="screenTime">
            {{ screenTime }}
            {{movieDetail.genre}}
            <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
              <button class="btn btn-small pink darken-1 waves-effect">Boka</button>
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
          day: this.getCorrectDay(1),
          month: this.getCorrectMonth(1)
        },
        {
          index: 1,
          dateName: "Tomorrow",
          day: this.getCorrectDay(2),
          month: this.getCorrectMonth(2)
        },
        {
          index: 2,
          dateName: this.getCorrectDayOfWeek(3),
          //dateName: "Day After Tomorrow",
          day: this.getCorrectDay(3),
          month: this.getCorrectMonth(3)
        }
      ],

      chosenDate: {
        dateName: "Today",
        day: this.getCorrectDay(1),
        month: this.getCorrectMonth(1)
      },
      showMenu: false,
      movies: this.$store.getters.movies,
      movieDetail: [],
      screenings: this.$store.state.scrData,
      screeningDetails: [],
      screenTimes: []
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    convertHourlyTime(time) {
      return moment(time).format("HH:mm");
    },

    // Format timeStamp to day
    convertToDayTime(time) {
      return moment(time).format(" D");
    },
    convertToMonthTime(time) {
      return moment(time).format("MMMM");
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
          return "Thuesday";
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

    getCurrentMonth(number) {
      switch (number) {
        case 1:
          return "January";
        case 2:
          return "February";
        case 3:
          return "Mars";
        case 4:
          return "April";
        case 5:
          return "May";
        case 6:
          return "June";
        case 7:
          return "July";
        case 8:
          return "August";
        case 9:
          return "September";
        case 10:
          return "October";
        case 11:
          return "November";
        case 12:
          return "December";
      }
    },

    updateChosenDate(index) {
      this.chosenDate = this.dates[index];
      this.showMenu = false;
    },
    addScreenTimes() {
      this.screenTimes = [];

      let chosenMonth = this.getCurrentMonth(this.chosenDate.month);
      let chosenDay = this.chosenDate.day;

      for (let s in this.screeningDetails) {
        if (
          this.convertToMonthTime(
            this.screeningDetails[s].startTime.toMillis()
          ) == chosenMonth &&
          this.convertToDayTime(
            this.screeningDetails[s].startTime.toMillis()
          ) == chosenDay
        ) {

          this.screenTimes.push(
            this.convertHourlyTime(
              this.screeningDetails[s].startTime.toMillis()
            )
          );
        }
      }
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

<style scoped>
.container-fluid {
  position: relative;
  top: -150px;
  background: linear-gradient(
    to top,
    rgba(235, 78, 161, 0.4) 10%,
    rgba(37, 33, 33, 0.6) 40%,
    rgba(0, 0, 0, 0.8) 90%
  );
  padding-bottom: 40px;
}

.title-text {
  text-align: center;
  position: relative;
  padding: 1% 0;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.hr-style {
  border: 0;
  min-width: 90%;
  max-width: 1%;
  height: 1px;
  margin: 0 auto 10px auto;
  background: #fff;
  background: -webkit-linear-gradient(left, rgb(104, 99, 99), #fff, rgb(104, 99, 99));
}

.dropdown-menu{
  position: relative;
  color: #ffe600;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.dropdown-items{
  color: rgb(145, 0, 96);
}
.dropdown-items h6:hover{
  cursor: pointer;
  color: rgb(212, 0, 166);
}
.available-times{
  display: flex;
  justify-content: center;
  margin: 1% 0;
}

.show-time-item{
  margin: 3% 0;
  padding: 3% 0;
}
</style>
