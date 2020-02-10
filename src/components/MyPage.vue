<template>
  <div>
    <div class="container">
      <div class="mina-sidor">
        <h1>Mina sidor </h1>
        <i class="fa fa-cog"></i>
      </div>
      <div>
        <h3>Välkommen {{username}}</h3>
      </div>
      <div>
        <h5>Kommande visningar</h5>
      </div>
      <div>
        <h5>Tidigare visningar</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: this.$store.getters.username
    }
  }
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 40%;
  /*border: 1px black solid;*/
}

.mina-sidor {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.fa-cog {
  font-size: 50px;
}
</style>