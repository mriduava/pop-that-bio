import Vue from 'vue'
import Vuex from 'vuex'
import {movies} from '@/data/database.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: movies
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
