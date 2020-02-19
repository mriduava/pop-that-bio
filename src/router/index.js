import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import MovieDetail from '@/components/movies/MovieDetail'
import MoviesList from '@/components/movies/MoviesList'
import MoviesListPic from '@/components/movies/PortraitView'
import BookTicket from '@/components/bookings/BookTicket'
import SeatsPlan from '@/components/bookings/SeatsPlan'
import Reservation from '@/components/bookings/Reservation'
import ConfReserve from '@/components/bookings/ConfirmReserve'
import MyPage from '@/components/users/MyPage'
import Questions from '@/components/info/Questions'

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
    path: '/movies/portrait',
    name: 'movieslistpic',
    component: MoviesListPic
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
    path: '/movies/:slug/ticket/seatsplan/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: "/movies/:slug/ticket/seatsplan/reservation/confirm",
    name: 'confreservation',
    component: ConfReserve
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated === false){
        next('/')
      }else{
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, 
  {
    path: '/q-and-a',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/q-and-a/:tab',
    name: 'Questions',
    component: Questions
  }
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: "history",
    base: process.env.BASE_URL
})

export default router