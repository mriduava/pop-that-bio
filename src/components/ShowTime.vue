<template>
  <div class="booking-section">
    <h3 class="book-tickets-title">Boka Biljetter</h3>
    <hr />

    <div class="dates">
      <div class="dropdown-menu">
        <h4 class="selected-dropdown-item" @click="showMenu = !showMenu">
          {{chosenDate.day}}/{{chosenDate.month}} - {{ chosenDate.dateName }}
          <i
            class="fas fa-chevron-down"
          ></i>
        </h4>
        <div class="dropdown-items" v-if="showMenu">
          <h5
            @click="updateChosenDate(0)"
          >{{dates[0].day}}/{{dates[0].month}} - {{ dates[0].dateName }}</h5>
          <h5
            @click="updateChosenDate(1)"
          >{{dates[1].day}}/{{dates[1].month}} - {{ dates[1].dateName }}</h5>
          <h5
            @click="updateChosenDate(2)"
          >{{dates[2].day}}/{{dates[2].month}} - {{ dates[2].dateName }}</h5>
        </div>
      </div>
    </div>

    <!-- Lista ut; hämta från Firebase -->
    <div class="available-times">
      <ul style="list-style-type:none;">
        <router-link class="link" to="/book-ticket">
          <li
            class="show-time-item"
            :key="time"
            v-for="time in times"
          >{{time.startTime}}<p>{{movieDetail.genre}}</p></li>
        </router-link>
        <!-- <li class="show-time-item" :key="time" v-for="time in times">
          {{time.startTime}}
          <router-link class="link" to="/book-ticket">Boka</router-link>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "showtime",
  data() {
    return {
      times: [
        {
          month: 5,
          day: 4,
          startTime: "13:45"
        },
        {
          month: 5,
          day: 4,
          startTime: "16:30"
        }
      ],
      dates: [
        {
          dateName: "Today",
          day: this.getCorrectDay(1),
          month: this.getCorrectMonth(1)
        },
        {
          dateName: "Tomorrow",
          day: this.getCorrectDay(2),
          month: this.getCorrectMonth(2)
        },
        {
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
      movie: this.$store.state.data,
      movieDetail: []
    };
  },
  methods: {
    getMovie() {
      this.movie.forEach(e => {
        if (e.slug == this.$route.params.slug) {
          this.movieDetail = e;
        }
      });
    },

    getCorrectDay(index) {
      let date = this.getSpecifiedDate(index);
      return ("0" + date.getDate()).slice(-2);
    },
    getCorrectMonth(index) {
      let date = this.getSpecifiedDate(index);
      return ("0" + (date.getMonth() + 1)).slice(-2);
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
    }
  },

  created() {
    this.getMovie();
  }
};
</script>

<style scoped>
.dates {
  display: inline-flex;
  justify-content: space-around;
}
.showTime {
  display: inline-block;
  padding-right: 20px;
}
.dropdown-menu {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 40px;
}
.available-times {
  border: 2px solid gold;
  justify-content: flex-start;
}
.available-times h4 {
  margin: 2px;
}

.time {
  margin: 0px;
  display: inline-block;
}
.book-tickets-title {
  margin-bottom: 5px;
}

.selected-dropdown-item {
  padding: 5px 20px;
  border: 2px solid white;
  margin-top: 40px;
  margin-bottom: 0px;
}
.dropdown-items {
  text-align: start;
  margin-top: 0px;
  padding: 5px 20px;
  border: 2px solid white;
}

.show-time-item {
  font-size: 40px;
}
.show-time-item p {
    margin-left: 50px;
    display: inline-block;
    font-size: 30px;
}
.link {
  background-color: red;
  color: white;
}
</style>
