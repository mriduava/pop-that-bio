<template>
  <div class="container">
    <div class="signup">
      <div class="row">
        <form class="col s12">
          <h4 class="center">Logga in</h4>

          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" v-model="user.email" />
              <label for="email">E-post</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" v-model="user.password" />
              <label for="password">Lössenord</label>
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div class>
                <button
                  class="btn waves-effect register-button center"
                  @click="register"
                >Logga in</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
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
            window.console.log(`Acount created for ${user.email}`);
            this.storeAccountDetails();
            this.$router.push("/");
          },
          err => {
            window.console.log(err.message);
          }
        );

      e.preventDefault();
    }
  }
};
</script>