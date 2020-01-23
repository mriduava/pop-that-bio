import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import DispMovies from '@/components/DispMovies'
import Signin from '@/components/Signin'
import Ticket from '@/components/Tickets'
import BookTicket from '@/components/BookTicket'
import SeatPlan from '@/components/SeatPlan'

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
    component: DispMovies
  },
  {
    path: '/movies/:slug',
    name: 'moviedetail',
    component: MovieDetail
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket
  },
  {
    path: '/book-ticket/:slug',
    name: 'book-ticket',
    component: BookTicket
  },
  {
    path: '/seatplan',
    name: 'seatplan',
    component: SeatPlan
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
})

export default router
