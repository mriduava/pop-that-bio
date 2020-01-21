<template>
  <div>
    <h3>{{movie.title}} This is movie from firebase</h3>
  </div>
</template>

<script>
import { db } from './firebaseConfig.js'

async function getMoviesData() {
    let querySnapshot = await db.collection("recipies").get()
    let movies = []
    querySnapshot.forEach((doc) => {
        movies.push(doc.data())
    })
    console.log('movies', movies)
}

// export default {
//   name: 'moviedetails',
//   computed: {
//     dispMovie(){
//       return this.$route.params.movieid
//     }
//   }  
// }
</script>

<style lang="scss" scoped>
  
</style>