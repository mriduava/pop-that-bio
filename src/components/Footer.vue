<template>
  <div class="container-fluid pt-5">
    <div class="row d-flex align-items-center">
      <hr class="hr-style">
      <div class="col-md-12 col-lg-12">
        <div class="Gäster-list">
          <div class="grop">
            <h5>Gäster</h5>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Kundservice</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Frågor och svar</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Boka större grupper</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Mina reservationer</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Lämna feedback</p>
            </a>
          </div>
          <div class="grop">
            <h5>Medlemmar</h5>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Kundservice</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Frågor och svar</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Boka större grupper</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Mina reservationer</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Lämna feedback</p>
            </a>
          </div>
          <div class="grop">
            <h5>Företag</h5>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Kundservice</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Frågor och svar</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Boka större grupper</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Mina reservationer</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Lämna feedback</p>
            </a>
          </div>
          <div class="grop">
            <h5>Företag</h5>

            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Kundservice</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Frågor och svar</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Boka större grupper</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Mina reservationer</p>
            </a>
            <a href="https://www.w3schools.com/tags/default.asp">
              <p>Lämna feedback</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="http://facebook.com/">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="http://twitter.com/">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="http://youtube.com/">
          <i class="fab fa-youtube"></i>
        </a>
        <p class="text-center text-white pt-5 mt-5">POP-THIS-BIO © 2020 MOVIES</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-footer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="css">
.container-fluid {
  color: rgb(81, 67, 94);
  padding: 1% 5%;
  /* height: 500px; */
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
  background: linear-gradient(to top, rgb(117, 9, 67), rgb(219, 166, 195));
}

a {
  color: rgb(233, 233, 233);
}

.fab {
  font-size: 24px;
  color: #fff;
  padding: 0.5%;
  margin: 30px auto;
}
.Gäster-list {
  /* max-width: 1300px; */
  margin: 40px auto 0 auto;
  padding: 20px 50px;
  justify-content: space-between;
  display: flex;
}

@media (min-width: 700px) {
  .Gäster-list {
    justify-content: first baseline;
    display: flex;
  }
}
.grop1 {
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  flex-basis: 30%;
}
.text-center text-white pt-5 mt-5 {
  font-size: 24px;
  color: #fff;
  float: left;
  margin: 100px auto;
}

.hr-style {
  border: 0;
  height: 1px;
  margin: 0 0 10px 0;
  background: #fff;
  background-image: -webkit-linear-gradient(left,  rgba(204, 149, 178, 0.9), #fff, rgba(204, 149, 178, 0.9));
}
</style>
