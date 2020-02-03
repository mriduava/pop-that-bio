import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '@/components/MovieDetail'
import MoviesList from '@/components/MoviesList'
import MoviesListPic from '@/components/MovieListPic'
import Signin from '@/components/Signin'
import BookTicket from '@/components/BookTicket'
import SeatsPlan from '@/components/SeatsPlan'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'dispmovies',
    component: MoviesList
  },
  {
    path: '/movies/:slug',
    name: 'moviedetail',
    component: MovieDetail
  },
  {
    path: '/movies/:slug/ticket',
    name: 'bookticket',
    component: BookTicket
  },
  {
    path: '/movies/:slug/ticket/seatsplan',
    name: 'seatsplan',
    component: SeatsPlan
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/movieslistpic',
    name: 'MoviesListPic',
    component: MoviesListPic
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]



const router = new VueRouter({
  routes,
  scrollBehavior () {
  return { x: 0, y: 0 }
},
  mode: "history",
  base: process.env.BASE_URL
})

export default router
