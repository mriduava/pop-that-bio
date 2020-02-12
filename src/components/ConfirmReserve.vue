<template>
<div class="container">
  <div class="final">
        <transition name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                 <div class="background-modal"></div>
                <div class="modal-header">
                    <slot name="header">
                        <h3>Reservation Information!</h3>
                        <hr>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                      <h3>UNDER KONSTRUKTION</h3>
                        <!-- <h4>Bookning nummer</h4>
                        <h4>Film: <span>{{movieDetail.title}}</span></h4>
                        <h4>Salong: <span>Salong</span></h4>
                        <h4>Platser: <span>Platser</span></h4> -->
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                      <h4>Tack så mycket!</h4>
                       <div class="modal-button">
                      
                        <router-link to="/">
                          <button class="btn btn-small waves-effect waves-light" @click="$emit('close')">Skriva ut</button>
                        </router-link>

                     </div>
                    </slot>
                </div>
                </div>
            </div>
            </div>
        </transition>
       </div>

  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "reservation",
  data() {
    return {
      movies: this.$store.getters.movies,
      movieDetail: [],

      auditoriumInfo: this.$store.state.auditoriumInfo,
      reserveInfo: this.$store.state.reserveInfo
    };
  },
  methods: {
    completeBooking() {
      let bookingNumber =
        Math.floor(Math.random() * 1000) +
        "-" +
        Math.floor(Math.random() * 100000);
      let tickets = this.$store.getters.tickets;
      let booking = {
        collection: "bookings",
        bookingNumber: bookingNumber,
        numberOfAdults: tickets.numberOfAdults,
        numberOfChildren: tickets.numberOfChildren,
        numberOfSeniors: tickets.numberOfSeniors
      };
      this.$store.dispatch("sendToFirebase", booking);
    },
    formatTime(time) {
      return moment(time).format("MMMM Do, HH:mm");
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
    this.$store.dispatch("getAuditoriums");
    this.getMovie();
  }
};
</script>

<style lang="css" scoped>

/* FINAL COMPONENT */
.final{
    max-width: 95%;
    margin: 10% auto;
    position: absolute;
    left: 50%;
    margin-left: -240px;
}

/* MODAL STYLE */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    position: relative;
    width: 600px;
    text-align: center;
    margin: 0px auto;
    padding: 20px 30px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;

    background: rgb(100, 10, 60);
    background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
    background: linear-gradient(to bottom, rgba(117, 9, 67, 0.89), rgba(219, 166, 195, 0.4));
  }
  
  .modal-header h1 {
    margin-top: 0;
    color: #ffffff;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  
  .modal-body {
    margin: 20px 0;
    position: relative;
  }

  h4{
    font-size: 1.1em;
    color: rgb(0, 255, 191);
    line-height: 0.5em;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  }

  h4>span{
      color: #fff;
  }

  .modal-footer> h2{
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  }
  
  .modal-button {
    display: flex;
    justify-content: center;
  }

  .modal-button> button{
      width: 60px;
      font-size: 20px;
      margin: 15px 5px 6px 5px;
      outline: none;
      color: #0082c8;
      padding: 5px;
      cursor: pointer;
      border: 1px solid #0502b4;
      background: #fff;
  }

  .modal-button .no{
      color: rgb(243, 22, 22);
  }

  
  .modal-button .yes{
      color: rgb(13, 189, 66);
  }

  .modal-button> button:hover{
      border: 1px solid #fff;
      color: #fff;
      background: #0082c8;
  }
  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>