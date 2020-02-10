<template>


 <div class="d1">

  <div></div> 
    <div class="row">
    <form class="col l3  s3 offset-l4 card-panel purple lighten-5 truncate">
        <div class="brand-logo">
             <h4 class="pink-text text-pink darken-4">POP THAT BIO</h4>
             <h2 class="pink-text text-pink darken-4"> Logga in</h2>
   </div>
      <div class="row">
        
        <div class="input-field col l12 s12 ">
          <input  id="User name" type="text" class="validate" v-model="email">
          <label for="User name">E-post adress</label>
        </div>
       
      </div>
    
      <div class="row">
        <div class="input-field col l12 s12">
          <input id="password" type="password" class="validate" v-model="password">
          <label for="password">Lösenord</label>
        </div>
      </div>
        <div class="col l4 offset-l8">
         <button class="btn pink accent-1" @click.prevent="logIn" >Logga in</button>
          
         </div>
    </form> 
  </div>
      <div class="row">
        <div class="col s5 offset-s3 ">
             <p class="white-text text-grey lighten-5">Medlemskapet för dig som älskar bio</p>
               <div class="group3">
                 <div class="row"> 
                    <div class="col l4"><img src="../assets/images/aws.jpg" alt="" width="60%" class="circle responsive-img"></div>
                    <div class="col l4"><img src="../assets/images/qaz.jpg" alt="" width="80%" class="circle responsive-img"></div>
                    <div class="col l4"><img src="../assets/images/aaa.png" alt="" width="50%" class="circle responsive-img"></div>
                 </div>
             <div class="row">
               <h5 class="col s4 white-text text-grey lighten-5 ">Förtur till biljettsläpp </h5>
               <h5 class="col s4 white-text text-grey lighten-5"> Erbjudanden i kiosken</h5>
               <h5 class="col s4 white-text text-grey lighten-5">Medlemskvällar</h5>
             </div>
             </div>
           <div class="butt">
             <router-link to="/tickets">
                            <div class="card-panel  pink darken-1  text-align: center white-text text-darken-2">Bli medlem</div>
                            <br>
                            <span class=" white-text text-darken-2">Som inloggad medlem tjänar du automatiskt poäng då du köper biljetter i appen eller på POP-THAT-BIO.se och du har dessutom 
                              alltid medlemskapet med dig i fickan. Bra va? Du måste vara 16 år för att bli medlem.</span>
             </router-link>
          </div>
     </div>         
  </div>
  

  </div>
</template>

<script>
import {aut} from '@/firebase/firebase.js'
export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
      isLoggedIn: '',
    }
  },
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
    },
    async signUp(e) {
      aut
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            window.console.log(`Account created for ${user.email}`)
            this.$router.push("/mypage");
            this.email = ''
            this.password = ''
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    },
    async logIn(e){
      e.preventDefault();
      await aut
        .signInWithEmailAndPassword(this.email, this.password).catch(err => {
          window.console.log(err)
          return
        })
        this.$store.dispatch('setUsername', this.email)
        this.$router.push("/mypage");
        window.console.log('u are logged in')
        this.isLoggedIn = true
    },
    async logOut(e){
      aut
        .signOut()
        .then(() => {
            window.console.log('u logged out')
            this.$router.push("/");
            this.isLoggedIn = false
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    }
    },
  }

</script>

<style lang="css" scoped>

.brand-logo,p{
 
  font-size: 1.5rem;
  padding-left: 1.5%;
  font-family:Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
 text-align: center;
   text-shadow: 2px 2px 2px black;
}
.d1{
  background-image:url('../assets/images/xsw.jpg');
  background-attachment:fixed;
  background-position:bottom auto;

}
h2{
   text-shadow: 4px 6px 5px black;
    text-align: center;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h4{
   text-shadow: 4px 6px 5px black;
    text-align: center;
  font-family: borntogrille;
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
  form{
    margin: 5%;
   padding-bottom: 10%
  }    
}
</style>
