<template>
  <div class="container">

    <div class="row" v-if="loading">
      <div class="col s6 offset-m3">
        <div class="loading">
          <img src="../../assets/images/loading.gif" alt="loading" width="100%" />
        </div>
      </div>
    </div>

    <div class="user-inof" v-else>
    <div class="row">
      <h4>Välkommen {{userInfo[0].name}}</h4>
      <div class="col s12">

      </div>
    </div>

    <div class="row">
      <h5>Kommande visningar</h5>
      <div class="col s12">
        
      </div>
    </div>

    <div class="row">
      <h5>Tidigare visningar</h5>
      <div class="col s12">
        
      </div>
    </div>
   </div>
    
  </div>
</template>

<script>
import { db } from "@/firebase/firebase.js";
export default {
  data(){
    return {
      loading: false,
      upcomingBookings: [],
      bookingsHistory: [],
      userId: this.$store.state.userId,
      userInfo: []
    }
  },
  methods:{
    getUsersInfo(){
      this.loading = true
      db.collection('users').doc(this.userId).get()
      .then(info=>{
        this.userInfo.push(info.data())
        this.loading = false
      })      
    }
  },
  created(){
    this.getUsersInfo();
  }
}
</script>