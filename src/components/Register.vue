<template>
  <div>
    <h1>Registrera för medlemskap</h1>
    <!-- <form action="#" @submit.prevent="submit"> -->

    <form action="#">
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
        <button @click="register">Register</button>
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
      console.log("REGISTER");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account created for ${user.emai}`);
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