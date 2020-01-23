<template>
  <div class="container-fluid pt-5">
      <div class="row d-flex align-items-center">
        <div class="col-md-12 col-lg-12">
        
     
          <div class="Gäster-list">
            
             <div class="group1">
              <h5>Gäster</h5>
              <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
                       </div>

            <div class="grou2p">
               <h5>Medlemmar</h5>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
            <div class="grou3p">
               <h5>Företag</h5>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
             <div class="group4">
               <h5>Företag</h5>
               
                <a href="https://www.w3schools.com/tags/default.asp"><p>Kundservice</p></a>
               <a href="https://www.w3schools.com/tags/default.asp"><p>Frågor och svar</p></a>
                <a href="https://www.w3schools.com/tags/default.asp"><p>Boka större grupper</p></a>
                 <a href="https://www.w3schools.com/tags/default.asp"><p>Mina reservationer</p></a>
                  <a href="https://www.w3schools.com/tags/default.asp"><p>Lämna feedback</p></a>
            </div>
           
          </div>
         </div>    
         </div>
              <div class="icomn">
                 <a href="http://facebook.com"><i class="fab fa-facebook"></i></a>
                 <a href="http://twitter.com"><i class="fab fa-twitter"></i></a>
                 <a href="http://youtube.com"><i class="fab fa-youtube"></i></a>
                 <p class="text-center text-white pt-5 mt-5">POP-THIS-BIO © 2020 MOVIES</p> 
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
  height:max-content;
   background:#570101; 
  background: linear-gradient(to bottom, #1b0101, #440808, #3d0202a9); 
 
    font-family:'Times New Roman', Times, serif
}
@media (min-width: 700px) {
.container-fluid{
  color: #fff;
  height: 500px;
  background:#570101; 
  background: linear-gradient(to bottom, #1b0101, #440808, #3d0202a9); 
  font-family:'Times New Roman', Times, serif
}
}


.fab{
  font-size: 24px;

  color: #fff;
  padding:0.5%;
   
 
}

.Gäster-list{
  max-width: 1300px;
  margin: 40px auto 40 auto;
  padding:20px 50px;
 
}
@media (min-width: 700px) {
.Gäster-list{
 justify-content:space-evenly;
 display: flex;
}
}

.grop{
 padding :40px;
 box-sizing: border-box;
 margin-bottom: 70px;
 flex-basis:auto;
 

  
}
.text-center text-white pt-5 mt-5{
   font-size: 24px;
    color: #fff;
    float: left;
}

</style>