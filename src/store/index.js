import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase/firebase.js'
require('@firebase/auth');
require('@firebase/firestore');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    auditoriums: [],
    auditoriumId: '',
    userId: null,
    userEmail: null,
    bookingId: '',
    scrData: [],
    mySeats: [],
    ticketsPriceData: [],
    confBookingsData: [],
    reserveInfo: {
      auditorium: '',
      movieTitle: "",
      showTime: 0,
      numOfTickets: {
        ordinarie: 0,
        children: 0,
        seniors: 0,
      },
      numOfCustomers: 0,
      ticketPrice: 0,
      selectedSeats: [],
    },
    ticketsInfo: {},
    user: {
      username: ''
    },

    beforeBookings: [],    
    beforeBooking: {
      movieTitle: '',
      timeStamp: '',
      reserveSeats: []
    },
    mySeatsInfo:{},
    authenticated: false,
    preSelected: []
  },
  getters: {
    movies(state){
      return state.data
    },
    auditoriums(state){
      return state.auditoriums
    },
    tickets(state){
      return state.tickets
    },
    screenings(state){
      return state.scrData
    },
    beforeBookings(state){
      return state.beforeBookings
    },
    username(state){
      return state.user.username
    },
    setAuthentication(state, status){
      state.authenticated = status;
    }
  },
  mutations: {
    UPDATE_DATA(state, moviesData){
      state.data = moviesData
    },
    UPDATE_AUDITORIUMS(state, audiData){
      state.auditoriums = audiData
    },
    UPDATE_SCREENINGS_DATA(state, screeningsData) {
      state.scrData = screeningsData
    },
    UPDATE_NUMBER_OF_TICKETS(state, numberOfTickets){
      state.ticketsInfo = numberOfTickets
    },
    POPULATE_BEFORE_BOOKINGS(state, tempBooking){
      state.beforeBookings = tempBooking
    },
    POPULATE_CONFIRM_BOOKINGS(state, confBooking){
      state.confBookingsData = confBooking
    },
    POPULATE_TICKET_PRICE(state, ticketPrice){
      state.ticketsPriceData = ticketPrice
    },
    SEND_SEATS_INFO(state, mySeats){
      state.mySeatsInfo = mySeats
    },
    SET_USERNAME(state, usrName){
      state.user.username = usrName
    }
  },
  actions: {
    async getDataFromFirebase({ commit }){
      let querySnapshot = await db.collection("movies").get()
      let movies = []
      querySnapshot.forEach(e => {
        let myData = e.data();
        myData.id = e.id;
        movies.push(myData)  
      });
      commit('UPDATE_DATA', movies)
    },
    async getAuditoriums({commit}){
      let snapshot= await db.collection("auditoriums").get()
      let auditoriums = []
      snapshot.forEach(auditorium => {
        let audiData = auditorium.data();
        audiData.id = auditorium.id;
        auditoriums.push(audiData)
      })
      commit('UPDATE_AUDITORIUMS', auditoriums)
    },
    async getBeforeBookings({commit}){
      let snapshot= await db.collection("mySeatsInfo").get()
      let tempBookings = []
      snapshot.forEach(seats => {
        let temp = seats.data();
        temp.id = seats.id;
        tempBookings.push(temp)
      })
      commit('POPULATE_BEFORE_BOOKINGS', tempBookings)
    },
    async getScreeningFromFirebase({ commit }) {
      let querySnapshot = await db.collection("screenings").get()
      let screenings = []
      querySnapshot.forEach(e => {
        screenings.push(e.data())
      });
      commit('UPDATE_SCREENINGS_DATA', screenings)
    },
    async getPriceData({commit}){
      let snapshot = await db.collection('prices').get()
      let prices = []
      snapshot.forEach(e=> {
        let price = e.data()
        price.id = e.id;
        prices.push(price)
      });
      commit('POPULATE_TICKET_PRICE', prices)
    },
    async getConfBookings({commit}){
      let snapshot = await db.collection('confBookings').get()
      let confBookings = []
      snapshot.forEach(e=> {
        let bookingInfo = e.data()
        bookingInfo.id = e.id;
        confBookings.push(bookingInfo)
      });
      commit('POPULATE_CONFIRM_BOOKINGS', confBookings)
    },
    async sendToFirebase(context, purchase){
      let collection = purchase.collection
      delete purchase.collection
      await db.collection(collection).add(purchase)
      /*
        To work with sendToFirebase
        when dispatch to this action there need to be a collection property. 
        Collection property selects the collection in firebase
        and then deletes it from the object it saves to firebase.
      */
    },
    async sendSeatsInfo(context, mySeats){
      let collection = mySeats.collection
      delete mySeats.collection
      await db.collection(collection).add(mySeats)
    },
    async sendConfirmBookings(context, confirmReserve){
      let collection = confirmReserve.collection
      delete confirmReserve.collection
      await db.collection(collection).add(confirmReserve)
    },
    updateTickets({ commit }, tickets){
      commit('UPDATE_NUMBER_OF_TICKETS', tickets)
    },
    setUsername({ commit }, username){
      commit('SET_USERNAME', username)
    },
    updateSeatsInfo({ commit }, mySeats){
      commit('SEND_SEATS_INFO', mySeats)
    }
  },
  modules:{
  }
})
