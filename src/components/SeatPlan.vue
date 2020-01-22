<template>
  <div class="container">
    <h4 class="green-text text-lighten-1">SEAT PLAN</h4>
    <div class="grid">
        <div v-for="(blockRow, row) in grid" :key="row">
            <div class="all-blocks" v-for="(block, col) in blockRow" :key = col
                 :style="{ top: row*30 + 'px', left: col*30 + 'px'}">      
                <div class="seats" v-if="block === 'S'"></div>              
            </div>
        </div>          
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: [
              ['O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
              ['O', 'S', 'S', 'S', 'S', 'S', ' ', 'S', 'O', 'S'],
              ['O', 'O', 'O', 'S', 'G', 'W', ' ', 'O', 'O', 'S'],
              ['O', 'O', 'O', 'S', ' ', 'W', ' ', 'W', 'W', 'S'],
              ['O', 'W', 'W', 'S', ' ', ' ', ' ', 'G', 'W', 'S'],
              ['O', 'W', 'G', ' ', ' ', ' ', ' ', 'W', 'W', 'S'],
              ['O', 'W', 'W', 'S', 'S', 'B', ' ', 'O', 'O', 'S'],
              ['O', 'O', 'O', 'S', 'S', 'G', ' ', 'O', 'O', 'S'],
              ['O', 'O', 'O', 'O', 'W', 'W', ' ', 'O', 'O', 'O'],
              ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
      ]
    }
  },
  
}
</script>


<style lang="css" scoped>
.grid{
    position: relative;
    margin: 0 auto;
}


.all-blocks{
    width: 32px;
    height: 32px;
    position: absolute;
    /* background: #888; */
    border: 1px solid #ddd;
}

.seats{
  width: 30px;
  height: 30px;
  background: #999;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
  
</style>