<template>
  <div class="container-fluid pt-5">
      <div class="row d-flex align-items-center">
        <div class="col-md-12 col-lg-12">
        
     
          <div class="Gäster-list">
            <div class="grop">
              <h5>Gäster</h5>
              <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
            <div class="grop">
               <h5>Medlemmar</h5>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
            <div class="grop">
               <h5>Företag</h5>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
             <div class="grop">
               <h5>Företag</h5>
               
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
             
           </div>
                
               </div>
              <div>
                 <a href="http://facebook.com/"><i class="fab fa-facebook"></i></a>
                 <a href="http://twitter.com/"><i class="fab fa-twitter"></i></a>
                 <a href="http://youtube.com/"><i class="fab fa-youtube"></i></a>
                 <p class="text-center text-white pt-5 mt-5">POP-THIS-BIO © 2020 MOVIES</p> 
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
  color: #fff;
  height: 500px;
  background: #2672ffb6;
  background: linear-gradient(to bottom, #24243e7a, #302b63, #15026bdc); 
  
}


.fab{
  font-size: 24px;

  color: #fff;
  padding:0.5%;
   margin: 30px auto;
 
}
.Gäster-list{
  max-width: 1300px;
  margin: 40px auto 40 auto;
  padding:20px 50px;
  justify-content:space-between;
  display: flex;
  
}
@media (min-width: 700px) {
.Gäster-list{
 justify-content:first baseline;
 display: flex;
}
}
.grop1{
 padding :20px;
 box-sizing: border-box;
 margin-bottom: 20px;
 flex-basis: 30%;
 

  
}
.text-center text-white pt-5 mt-5{
   font-size: 24px;
    color: #fff;
    float: left;
    
   margin: 100px auto
}

</style>
