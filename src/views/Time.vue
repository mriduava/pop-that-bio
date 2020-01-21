<template>
  <div class="time">
      <Times/>
  </div>
</template>

<script>
import Times from '@/components/Times.vue'

export default {
  name: 'time',
  components: {
    Times
  }
}
</script>

<style lang="css">
.home{
  background: #2672ffb6;
  background: linear-gradient(to top, #24243e7a, #302b63, #15026bdc); 
}
</style>
