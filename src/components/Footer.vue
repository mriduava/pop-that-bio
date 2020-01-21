<template>
  <div class="container-fluid pt-5">
      <div class="row d-flex align-items-center">
        <div class="col-md-12 col-lg-12">
          <p class="text-center text-white pt-5 mt-5">© 2020 MOVIES</p>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.container-fluid{
  height: 200px;
  background: #2672ffb6;
  background: linear-gradient(to bottom, #24243e7a, #302b63, #15026bdc); 
}

</style>
