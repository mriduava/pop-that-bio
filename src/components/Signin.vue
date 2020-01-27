<template>
 <div>
    <h1>Sign In</h1>
    <button @click="test">Click me!!!</button>
  </div>
</template>

<script>
export default {
  name: 'signin',
  methods: {
    test(){
        alert("Test running")
        let purchase = {
          collection: 'salon',
          id: 2,
          title: 'Jungle Book',
          slug: 'jungle-book',
          movieTrailer: 'HcgJRQWxKnW',
          image: 'hejsanTest',
          landImg: '',
          text: 'test',
          showDate: 'Friday',
          showTime: 'Hejsan Testis'
        }
        this.$store.dispatch('sendToFirebase', purchase)
    }
  }
}
</script>

<style lang="css" scoped>
  
</style>

