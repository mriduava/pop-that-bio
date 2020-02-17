<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="grey lighten-4 black-text center">
          <h4>Skapa konto</h4>
          <hr class="hr-style">
          <form @submit.prevent="signup">
            <div class="input-field">
              <input type="text" id="text" v-model="name">
              <label for="email">Namn</label>
            </div>
            <div class="input-field">
              <input type="email" id="email" v-model="email">
              <label for="email">E-post</label>
            </div>
            <div class="input-field">
              <input type="password" id="password" v-model="password">
              <label for="password">Lösenord</label>
            </div>
            <div class="alert center red-text" v-if="alert !== ''">
              <h6>{{alert}}</h6>
            </div>
            <button type="submit" class="btn btn-small waves-effect">Skapa konto</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import {db} from '@/firebase/firebase.js'
export default {
  name: 'register',
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      alert: '',
      message: '',
    };
  },
  methods: {
    signup (e) {      
      firebase
        .auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
          return db.collection('users').doc(cred.user.uid).set({
            name: this.name,
            email: this.email
          });
            
        }).then(()=>{
          
          this.message = `Välkommen ${this.name}`;
          this.$emit('close', this.message)
          this.$router.push({ path: '/minasidor'});
        },err => {
            err.message = "OBS!! E-post eller lösenord är fel!"
            this.alert = err.message;
        });
        e.preventDefault();
    }
  },
  created() {
    
  },
};
</script>

<style lang="css" scoped>
button{
  margin-top: 5%;
}
.hr-style {
  border: 0;
  height: 1px;
  margin: 0 0 10px 0;
  background: #fff;
  background-image: -webkit-linear-gradient(left,  rgb(255, 255, 255), rgba(184, 10, 103, 0.993), rgb(255, 255, 255));
}
.btn{
  background: rgb(230, 12, 128);
}
  
</style>