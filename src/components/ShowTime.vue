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
            {{chosenDate.date}}/{{chosenDate.month}} - {{ chosenDate.dateName }}
            <i
              class="fas fa-chevron-down"
            ></i>
          </h5>
          <div class="dropdown-items" v-if="!showMenu">
            <ul>
              <li
                v-for="(date, i) in dates"  :key="i"
                @click="updateChosenDate(date.index)"
              >{{ date.date }} / {{ date.month}} - {{ date.dateName}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="available-times">
        <ul style="list-style-type:none;">
          <!-- <li class="show-time-item" v-for="(screeningDetail, i) in screeningDetails" :key="i"> -->
          <li class="show-time-item" v-for="(screenTime, i) in screenTimes" :key="i">
                <!-- {{ screenTime }} | -->
                {{ screenTime.time }} |
                {{ screenTime.auditorium}}

            
            <!-- {{movieDetail.genre}} -->
            <router-link :to="'/movies/' + movieDetail.slug + '/ticket'">
              <button @click="sendBookingDetails(screenTime)" class="btn btn-small pink darken-1 waves-effect">Boka</button>
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
        time: "",
      },
      showMenu: false,
      movies: this.$store.getters.movies,
      movieDetail: [],
      auditoriums: this.$store.getters.auditoriums,
      auditoriumDetail: [],
      screenings: this.$store.state.scrData,
      screeningDetails: [],
      screenTimes: [],
      chosenAuditorium: "",
    };
  },
  methods: {
    momentTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
    },
    customMomentTime(time, format) {
      return moment(time).format(format)
    },

    getMovie() {
      this.movies.forEach(movie => {
        if (movie.slug === this.$route.params.slug) {
          this.movieDetail = movie;
        }
      });
    },
    getAuditorium(){
      this.auditoriums.forEach(auditorium => {
        this.auditoriumDetail = auditorium;
      })
    },
    getScreening() {
      this.screenings.forEach(e => {
        if (e.movieId === this.movieDetail.id) {
          this.screeningDetails.push(e);
          //this.screeningDetails = e;
          
          this.$store.state.reserveInfo.showTime = e.startTime       
        }
        if (e.auditoriumId === this.auditoriumDetail.id) {
           this.$store.state.auditoriumInfo.name = this.auditoriumDetail.name  
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
    updateChosenDate(index) {
      this.chosenDate = this.dates[index];
      this.showMenu = false;
    },

    addScreenTimes() {
      this.screenTimes = [];

      let chosenMonth = this.chosenDate.month;
      let chosenDay = this.chosenDate.date;

      for (let s in this.screeningDetails) {

        if (this.customMomentTime(this.screeningDetails[s].startTime.toMillis(), "MM") == chosenMonth &&
          this.customMomentTime(this.screeningDetails[s].startTime.toMillis(), " D") == chosenDay) {
         // window.console.log(s.auditoriumId + " aud ID")
  
           this.screenTimes.push(
             {
              time: this.customMomentTime(this.screeningDetails[s].startTime.toMillis(), "HH:mm"),
              auditorium: this.convertIdToAuditioriumName(this.screeningDetails[s].auditoriumId)
            }
          );
        }
      }
    },


    convertIdToAuditioriumName(id) {

      switch(id) {
        case "ZsZnuLCgGA5gjHIvZUVa":
            return "Lilla Salongen"
          case "Cw0BLCXOYyMpoXW8OAiL":
            return "Stora Salongen"
      }
    },

    sendBookingDetails(screenTime) {
      this.chosenDate.time = screenTime
      //window.console.log("Send Booking Details for: " + this.chosenDate)
      this.$store.state.reserveInfo.showTime = this.chosenDate     
      this.chosenAuditorium = screenTime.auditorium
      //window.console.log("Audi " + this.chosenAuditorium)
      this.$store.state.reserveInfo.auditorium = this.chosenAuditorium
      
    },

   
  },

  created() {
    this.$store.dispatch("getAuditoriums");
    this.getAuditorium();
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
