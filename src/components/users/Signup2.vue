<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="grey lighten-4 black-text center">
          <h4>Skapa konto</h4>
          <hr class="hr-style">
          <form action="index.html">
            <div class="input-field">
              <input type="text" id="email" v-model="name">
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
            <button @click="register" class="btn btn-small btn-extended grey lighten-4 black-text">Skapa konto</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      alert: '',
      message: ''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.message = `Välkommen ${user.email}`;
            this.$router.go({ path: this.$router.path });
          },
          err => {
            err.message = "OBS!! E-post eller lösenord är fel!"
            this.alert = err.message;
          }
        );
      e.preventDefault();
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
  
</style>