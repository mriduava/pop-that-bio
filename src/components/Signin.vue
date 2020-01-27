<template>
 <div>
 <h1></h1>
   
    <div class="row">
    <form class="col s3 offset-s4 card-panel purple lighten-5 truncate">
        <div class="brand-logo">
             <h4 class="pink-text text-pink darken-4">POP THAT BIO</h4>
             <h2 class="pink-text text-pink darken-4">Sign In</h2>
   </div>
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
         <button class="btn pink accent-1" @click.prevent="test () " >Logga in</button>
          
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
.brand-logo{
  font-size: 2.5rem;
  padding-left: 1.5%;
  font-family:Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
 text-align: center;
   text-shadow: 4px 6px 5px black;
}
h2{
   text-shadow: 4px 6px 5px black;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
  
</style>

