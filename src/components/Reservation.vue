<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4 class>Reservation</h4>
    </div>

    <hr class="hr-style" />

    <div class="seats-info">
      <div class="gray-circle"></div>
      <div>
        <span>Ledig</span>
      </div>
      <div class="purple-circle"></div>
      <div>
        <span>Upptagen</span>
      </div>
    </div>

    <div class="grid">
      <div class="row seats-grid">
        <div class="all-blocks">
          <div class="seats"></div>
        </div>
      </div>
    </div>

    <div class="row seat-position">
      <h6>Parkett</h6>
    </div>

    <div class="buttons">
      <!-- <router-link :to="'/movies/' + movieDetail.slug + '/ticket'"> -->
      <button class="btn btn-small waves-effect waves-light">Tillbaka</button>
      <!-- </router-link>
      <router-link to="/">-->
      <button class="btn btn-small waves-effect waves-light">Reservera biljetter</button>
      <!-- </router-link> -->

      <!-- <router-link to="/"> -->
      <button class="btn btn-small waves-effect waves-light">Köp biljetter</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "reservation"
};
</script>



<style lang="css">
.container-fluid {
  padding-bottom: 3%;
}
.title-text {
  text-align: center;
  color: rgb(204, 9, 113);
}

/* SEATS INOF */
.seats-info {
  display: flex;
  justify-content: center;
  margin: 1.9% auto;
}
.gray-circle,
.purple-circle,
.blue-circle {
  margin: 0 0.5% 0 0.5%;
  width: 20px;
  height: 20px;
  background: #ddd;
  border: 1px solid #8e8e8e;
  border-radius: 50%;
}
.gray-circle {
  background: #ddd;
}
.purple-circle {
  background: rgb(204, 9, 113);
}
.blue-circle {
  background: rgba(111, 111, 241, 0.699);
}
/* STYLE TO GRID */

.seats-grid {
  display: flex;
  justify-content: center;
}
.all-blocks {
  position: relative;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.seats {
  justify-content: center;
  width: 23px;
  height: 20px;
  margin: 0 3px;
  border: 1px solid #8e8e8e;
  background: #ddd;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.seats:hover {
  cursor: pointer;
  background: rgb(204, 9, 113);
}

.seat-position {
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: center;
  margin: 0 1% 3% 1%;
}

.btn {
  background: rgba(202, 8, 112, 0.692);
  margin-left: 10px;
  margin-right: 10px;
}

.hr-style {
  border: 0;
  min-width: 90%;
  max-width: 1%;
  height: 1px;
  margin: 0 auto 10px auto;
  background: #fff;
  background: -webkit-linear-gradient(left, #fff, rgb(204, 9, 113), #fff);
}
</style>