<template>
  <div class="booking-section">
    <h3>Book Tickets</h3>
    <!--<h3>{{ movieDetail.title }}</h3>-->
    <hr />
    <!-- <h3>Saloon 1</h3> -->
    <!-- Drop down (todays date, and 4 days forward) -->

    <div class="dates">
      <h4 class="showTime">Show movies for date:</h4>

      <div class="dropdown-menu">
        <h4
          class="Selected Item"
          @click="showMenu = !showMenu"
        >{{chosenDate.day}}/{{chosenDate.month}} - {{ chosenDate.dateName }}</h4>
        <div v-if="showMenu">
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

    <div class="available-times">
        <h4 class="time">16:45 <button>Book</button></h4><br>
        <h4 class="time">17:30 <button>Book</button></h4><br>
        <h4 class="time">18:45 <button>Book</button></h4><br><!-- TAs till component för ange antal personer-->
    </div>
  </div>
</template>

<script>
export default {
  name: "showtime",
  data() {
    return {
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
}
.avaiable-times {
  display: inline-flex;
  justify-content: flex-start;
  align-content: flex-start;
}

.time {
    margin: 0px;
    display: inline-block;
}

</style>
