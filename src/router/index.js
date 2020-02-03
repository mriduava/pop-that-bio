import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '@/components/MovieDetail'
import MoviesList from '@/components/MoviesList'
import Signin from '@/components/Signin'
import BookTicket from '@/components/BookTicket'
import SeatsPlan from '@/components/SeatsPlan'
import MyPage from '@/components/MyPage'

import Register from '@/components/Register'

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
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, 
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
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
