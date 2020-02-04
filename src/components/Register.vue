<template>
  <div class="register-component">
    <h1 class="title">Registrera Medlemskap</h1>
    <!-- <form action="#" @submit.prevent="submit"> -->

    <form class="register-form" action="#">
      <div class="input-field">
        <!--<input id="name" type="text" name="name" value required autofocus v-model="form.name">-->
        <input id="name" type="text" name="name" value required autofocus v-model="name" />
        <label for="name">Namn</label>
      </div>

      <div class="input-field">
        <input id="email" type="email" name="email" value required autofocus v-model="email" />
        <!--<input id="email" type="email" name="email" value required autofocus v-model="form.email">-->

        <label for="email">Email</label>
      </div>

      <div class="input-field">
        <input id="password" type="password" name="password" required v-model="password" />
        <!--<input id="password" type="password" name="password" required v-model="form.password">-->

        <label for="password">Lösenord</label>
      </div>

      <div class="input-field">
        <!--<button type="submit">Registrera</button>-->
        <button class="btn waves-effect register-button" @click="register">Skapa</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      name: ""
      // form: {
      //     name: "",
      //     email: "",
      //     password: ""
      // }
    };
  },
  methods: {
    storeAccountDetails() {
      let accountInfo = {
        name: this.name,
        email: this.email,
        collection: "accounts"
      };

      this.$store.dispatch("sendToFirebase", accountInfo);
    },

    register(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            window.console.log(`Acount created for ${user.email}`)
            //alert(`Account created for ${user.emai}`);
            this.storeAccountDetails();
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
  .register-component {
    background-color: pink;
  }

  .title {
    margin: 0px;
    padding-top: 60px;
    text-align: center;
    color: white;
  }
  .register-form {
    /*background-color: pink;*/
    padding: 20px;
    margin: 0 auto;
    width: 35vw;
  }
  .register-button {
    margin: 0 auto;
    display: block;
    /* margin-left: 30px; */
  }
  .input-field input {
    color: white;
  }

</style>