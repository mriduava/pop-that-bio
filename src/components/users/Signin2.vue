<template>
    <div class="container-fluid">
      <div class="row signin">
        <div class="col s12 m8 offset-m2">
          <div class="center">
            <h4>Logga in</h4>
            <hr class="hr-style">
            <form @submit.prevent="login">
              <div class="input-field">
                <input type="email" id="email" v-model="email" />
                <label for="email">E-post</label>
              </div>
              <div class="input-field">
                <input type="password" id="password" v-model="password" />
                <label for="password">Lösenord</label>
              </div>
              <div class="alert center red-text" v-if="alert !== ''">
                <h6>{{alert}}</h6>
              </div>
              <button
                type="submit"
                class="btn btn-small waves-effect"
              >Logga in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      alert: '',
      message: ''
    };
  },
  methods: {
    login () {      
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
            this.message = `Inloggad som ${cred.user.email}`;
            this.$store.state.userId = cred.user.uid
            this.$store.state.userEmail = cred.user.email
            this.$emit('close', this.message)
            this.$router.push({ path: '/minasidor' });  
             this.alert = ''
            this.email = ''
            this.password =''          
          },
          err => {
            err.message = "OBS!! E-post eller lösenord är fel!"
            this.alert = err.message;
          }
        );
      // this.$eventBus.$emit('logginStatus', true);
    }
  }
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