import Vue from 'vue'
import Vuex from 'vuex'
// import {movies} from '@/data/database.js';
import {db} from '@/firebase/firebaseConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data: movies
    data: []
  },
  getters: {
    movies: (state) => {
      return state.data
    }
  },
  mutations: {
    UPDATE_DATA(state, moviesData){
      state.data = moviesData
    }
  },
  actions: {
    async getDataFromFirebase({ commit }){
      let querySnapshot = await db.collection("pop-movies").get()
      let movies = []
      querySnapshot.forEach(e => {
        movies.push(e.data())        
      });
      commit('UPDATE_DATA', movies)
    }
  },
  modules: {
  }
})
