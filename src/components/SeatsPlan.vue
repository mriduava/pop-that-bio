<template>
  <div class="container-fluid">
    <div class="title-text">
      <h4 class>Platser</h4>
    </div>
    <hr class="hr-style">
    <div class="seats-info">
      <div class="gray-circle"></div>
      <div>
        <span>Ledig</span>
      </div>
      <div class="purple-circle"></div>
      <div>
        <span>Besatt</span>
      </div>
      <div class="blue-circle"></div>
      <div>
        <span>Handikappad</span>
      </div>
    </div>
    <div class="grid">
      <div class="row" v-for="(blockRow, row) in grid" :key="row">
        <div
          class="all-blocks"
          v-for="(block, col) in blockRow"
          :key="col"
          :style="{ top: row*24 + 'px', left: col*24+ 'px'}"
        >
          <div class="seats" v-if="block==='S'"></div>
          <div class="disabled-seats" v-else-if="block==='H'"></div>
        </div>
      </div>
    </div>

    <div class="buttons">
      <router-link to="/">
        <button class="btn btn-small waves-effect waves-light">Tillbaka</button>
      </router-link>
      <router-link to="/">
        <button class="btn btn-small waves-effect waves-light">Fortsätt</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: [
        [" ", " ", "S", "S", "S", "S", "S", "S", "S", "S", " ", " "],
        [" ", " ", "S", "S", "S", "S", "S", "S", "S", "S", "H", " "],
        [" ", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", " "],
        [" ", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", " "],
        [" ", "H", "S", "S", "S", "S", "S", "S", "S", "S", "H", " "],
        [" ", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", " "],
        ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]
    };
  }
};
</script>


<style lang="css" scoped>
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
.grid {
  display: flex;
  position: relative;
  max-width: 285px;
  min-height: 220px;
  padding: 20px;
  margin: 0 auto 1% auto;
}
.all-blocks {
  position: absolute;
  width: 20px;
  height: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.seats,
.disabled-seats {
  width: 20px;
  height: 20px;
  border: 1px solid #8e8e8e;
  background: #ddd;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.disabled-seats {
  background: rgba(111, 111, 241, 0.699);
}

.seats:hover,
.disabled-seats:hover {
  cursor: pointer;
  background: rgb(204, 9, 113);
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 0 1% 1% 1%;
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