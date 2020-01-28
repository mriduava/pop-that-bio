<template>
 <div>
 <h1></h1>
   
    <div class="row">
    <form class="col l3  s6 offset-l4 card-panel purple lighten-5 truncate">
        <div class="brand-logo">
             <h4 class="pink-text text-pink darken-4">POP THAT BIO</h4>
             <h2 class="pink-text text-pink darken-4">Sign In</h2>
   </div>
      <div class="row">
        
        <div class="input-field col l6 s12 ">
          <input  id="User name" type="text" class="validate">
          <label for="User name">User Name</label>
        </div>
       
      </div>
    
      <div class="row">
        <div class="input-field col l6 s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
        <div class="col s6 offset-s8">
         <button class="btn pink accent-1" @click.prevent="test () " >Logga in</button>
          
         </div>
    </form> 
  </div>
      <div class="row">
        <div class="col s5 offset-s3">
             <p class="pink-text text-pink darken-4">Medlemskapet för dig som älskar bio</p>
             <div class="group3">
             <div class="row">
               <div class="col s4">Förtur till biljettsläpp</div>
               <div class="col s4">Medlemskvällar</div>
               <div class="col s4">Erbjudanden i kiosken</div>
             </div>
             </div>
           <div class="butt">
               <a href="test ()"><div class="card-panel  pink darken-1  text-align: center white-text text-darken-2">Bli medlem</div></a>
          </div>
     </div>         
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
.brand-logo,p{
  font-size: 2.5rem;
  padding-left: 1.5%;
  font-family:Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
 text-align: center;
   text-shadow: 2px 2px 2px black;
}
h2{
   text-shadow: 4px 6px 5px black;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.butt{
  font-size: 1rem;
  padding-left: 3%;
  font-family:Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
 text-align: center;
   text-shadow: 2px 2px 2px black;

}
@media (max-width: 700px) {
 h4 {
    text-size-adjust:2%
  }    
}
</style>

