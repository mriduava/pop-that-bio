<template>
  <div class="container-fluid">
    <div class="container">
      <hr class="hr-style"/>
      <div class="row footer-info">
        <div class="col x12 s12 m3 l6 xl6 group1">
          <h5>Gäster</h5>
          <a href="mailto:info@popthatbio.se">Kundservice</a>
          <router-link to="/q-and-a/1">
            <p>Frågor och svar</p>
          </router-link>
        </div>

        

        <div class="col x12 s12 m6 l6 xl6 group3">
          <h5>Företag</h5>
          <router-link to="/about">
            <p>Om Pop that Bio</p>
          </router-link>
          <router-link to="/q-and-a/2">
            <p>Kontakta oss</p>
          </router-link>
        </div>

        
      </div>

      <div class="row">
        <div class="col s12 social-media">
          <a href="http://facebook.com/">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="http://twitter.com/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="http://youtube.com/">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <p class="text-center text-white pt-5 mt-5">&copy; 2020 POP THAT BIO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.container-fluid {
  text-align: center;
  color: rgb(253, 251, 255);
  padding: 1% 0;
  background: rgb(100, 10, 60);
  background: -webkit-linear-gradient(to top, rgb(156, 36, 100), #fbd3e9);
  background: linear-gradient(to top, rgb(117, 9, 67), rgb(219, 166, 195));
}
.footer-info h5{
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
.footer-info p{
  color: rgba(250, 186, 247, 0.952);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.footer-info p:hover{
  color: #fff;
}

.social-media a{
  color: rgb(245, 166, 255);
  text-decoration: none;
  padding: 0 5px; 
  font-size: 1.5em;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}

.social-media a:hover{
  color: #fff;
}

.group1 a{
  color: rgba(250, 186, 247, 0.952);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}


.hr-style {
  border: 0;
  height: 1px;
  margin: 0 0 10px 0;
  background: #fff;
  background-image: -webkit-linear-gradient(left,  rgb(201, 160, 195), rgba(184, 10, 103, 0.993), rgb(201, 160, 195));
}
</style>
