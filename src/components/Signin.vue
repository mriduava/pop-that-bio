<template>
 <div>
   <h3>Sig In</h3>
    <div class="row">
    <form class="col s3 offset-s4 card-panel purple lighten-5">
      <div class="row">
        
        <div class="input-field col s6 ">
          <input  id="User name" type="text" class="validate">
          <label for="User name">User Name</label>
        </div>
       
      </div>
    
      <div class="row">
        <div class="input-field col s6">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
        <div class="col s6 offset-s8">
         <button @click.prevent="test () " >Logge in</button>
          
         </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  methods: {
    test(){
        alert("Test running")
        let purchase = {
          collection: 'salon',
          id: 2,
          title: 'Jungle Book',
          slug: 'jungle-book',
          movieTrailer: 'HcgJRQWxKnW',
          image: 'hejsanTest',
          landImg: '',
          text: 'test',
          showDate: 'Friday',
          showTime: 'Hejsan Testis'
        }
        this.$store.dispatch('sendToFirebase', purchase)
    }
  }
}
</script>

<style lang="css" scoped>

  
</style>

