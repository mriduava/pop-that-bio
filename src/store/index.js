import Vue from 'vue'
import Vuex from 'vuex'
// import router from '@/router/index.js';
// import {movies} from '@/data/database.js';
import {db} from '@/firebase/firebase.js'
require('@firebase/auth');
require('@firebase/firestore');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    auditoriums: [],
    auditoriumId: '',
    scrData: [],
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
    ticketsInfo: {}
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
    async getScreeningFromFirebase({ commit }) {
      let querySnapshot = await db.collection("screenings").get()
      let screenings = []
      querySnapshot.forEach(e => {
        screenings.push(e.data())
      });
      commit('UPDATE_SCREENINGS_DATA', screenings)
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
    updateTickets({ commit }, tickets){
      commit('UPDATE_NUMBER_OF_TICKETS', tickets)
    },
  },
  modules:{
  }
})
