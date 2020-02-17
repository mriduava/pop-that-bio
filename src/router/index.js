import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'
import Home from '../views/Home.vue'
import MovieDetail from '@/components/MovieDetail'
import MoviesList from '@/components/MoviesList'
import MoviesListPic from '@/components/MoviesListPic'
import Signin from '@/components/Signin'
import BookTicket from '@/components/BookTicket'
import SeatsPlan from '@/components/SeatsPlan'
import Reservation from '@/components/Reservation'
import ConfReserve from '@/components/ConfirmReserve'
import MinaSidor from '@/components/users/MyPage'

import MyPage from '@/components/MyPage'
import Register from '@/components/Register'
import Members from '@/components/Members'
import Questions from '@/components/Questions'
import CustomerService from '@/components/CustomerService'

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
    path: '/movieslistpic',
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
    path: '/minasidor',
    name: 'mypage',
    component: MinaSidor
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage,
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
    path: '/medlemmar',
    name: 'Members',
    component: Members
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
  },
  {
    path: '/kundservice',
    name: 'CustomerService',
    component: CustomerService
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

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = firebase.auth().currentUser;
//   console.log("isauthenticated", isAuthenticated);
//   if (requiresAuth && !isAuthenticated) {
//     next("/mypage");
//     // next({path:'/', query:{redirect: to.fullPath}})
//   } else {
//     next();
//   }
// });


export default router