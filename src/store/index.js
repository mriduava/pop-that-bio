import Vue from 'vue'
import Vuex from 'vuex'
// import {movies} from '@/data/database.js';
import {db} from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data: movies
    data: []
  },
  getters: {
    movies(state){
      return state.data
    },
    tickets(state){
      return state.tickets
    }
  },
  mutations: {
    UPDATE_DATA(state, moviesData){
      state.data = moviesData
    },
    UPDATE_NUMBER_OF_TICKETS(state, numberOfTickets){
      state.tickets = numberOfTickets
    }
  },
  actions: {
    async getDataFromFirebase({ commit }){
      let querySnapshot = await db.collection("movies").get()
      let movies = []
      querySnapshot.forEach(e => {
        movies.push(e.data())        
      });
      commit('UPDATE_DATA', movies)
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
    }
  },
  modules: {
  }
})
