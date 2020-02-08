<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4 class>Platser</h4>
    </div>
    <hr class="hr-style" />
    <div class="title-text">
      <h4 class>{{auditoriumName}}</h4>
    </div>
    <div class="seats-info">
      <div class="gray-circle"></div>
      <div>
        <span>Ledig</span>
      </div>
      <div class="green-circle green"></div>
      <div>
        <span>Mitt val</span>
      </div>
      <div class="purple-circle"></div>
      <div>
        <span>Upptagen</span>
      </div>
    </div>

    <div class="grid">
      <div class="row seats-grid" v-for="(blockRow, row) in seatsGrid" :key="row">
        <div
          class="seats center" style="color: #e88; font-size: 0.7rem"
          v-for="(block, col) in blockRow"
          :key="col"
          @mouseover="showPositionsOnHover(row, col)"
          @click="selectSeats(row, col)"
        >
         <div class="pre-selected"          
          v-for="(seatNum, i) in selectedSeats" :key="i"
          :class="{'pink': block == seatNum}">{{block}}
         </div>        
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
      <router-link :to="'/movies/' + movieDetail.slug + '/ticket/seatsplan/reservation'">
        <button
          class="btn btn-small waves-effect waves-light"
          :class="{ disabled: counter !== totalSeats}"
        >Fortsätt</button>
      </router-link>
    </div>
  </div>
</template>

<script>
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
      totalSeats: this.$store.state.ticketsInfo.totalTickets,
      counter: 0,
      message: '',
      seatHover: { x: 0, y: 0 },
      toggleSelection: false,
      selectedSeats: [27, 33, 45],
      mySelection: []
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
        for(let j=0; j<this.seatsGrid[i].length; j++){
          this.seatsGrid[i][j] = num
          num++
        }
      }
    },
    selectSeats(x, y) {
      this.toggleSelection = !this.toggleSelection;
      let seatNum = this.seatsGrid[x][y]
      let preBooked = false
      for (let i = 0; i < this.selectedSeats.length; i++) {
        if (this.selectedSeats[i] === seatNum) {
          preBooked = true;
          this.message = 'Platsen är uptagna!'
        }          
      }
      let myBooked = false;
      let seatIndex = 0
      for (let i = 0; i < this.mySelection.length; i++) {
        if (this.mySelection[i] === seatNum) {
          myBooked = true
          seatIndex = this.mySelection.indexOf(seatNum)
        }
      }

      if (this.counter < this.totalSeats && !preBooked) {
        if (!myBooked) {
          event.target.classList.add('selected')
          this.mySelection.push(seatNum);
          this.counter++;
        }else{
          event.target.classList.remove('selected')
          this.mySelection.splice(seatIndex, 1);
          this.counter--;
        }
      }       
      console.log(this.mySelection);         
    },
    showPositionsOnHover(x, y) {
      let seat = this.seatsGrid[x][y]
      this.message = '';
      this.seatHover = { x: x + 1, y: seat};
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
    this.getAuditorium(this.auditoriumId)
    this.createSeatsGrid()
    this.getMovie();
  }
};
</script>


<style lang="css" scoped>
.container-fluid {
  padding-bottom: 3%;
}
.title-text {
  text-align: center;
  color: rgb(204, 9, 113);
}

/* SEATS INOF */
.seats-info {
  display: flex;
  justify-content: center;
  margin: 1.9% auto;
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
}
.pre-selected{
  width: 21px;
  height: 18px;
  position: absolute;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.buttons {
  display: flex;
  justify-content: center;
  margin: 0 1% 3% 1%;
}
.btn {
  background: rgba(202, 8, 112, 0.692);
  margin-left: 10px;
  margin-right: 10px;
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
</style>