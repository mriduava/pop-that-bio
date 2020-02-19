<template>
  <div class="container-fluid">
    <div class="row container">
      <div class="col s12">
        <h4 class="title-text center">Om Oss</h4>
        

        <div class="combs">
          <div class="honey-comb">
            <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/240500_1896488863959_5000563_o.jpg?_nc_cat=103&_nc_sid=210fed&_nc_ohc=n6eEkgTdXToAX8d1WWC&_nc_ht=scontent-arn2-1.xx&oh=a3a27034dbc5be2ec7d26a4fade4c7c2&oe=5F022EDA" alt />
          </div>
          <div class="honey-comb">
            <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13659107_10209864216704760_168704024662997376_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=e2irdxyHXwsAX-cjkeo&_nc_ht=scontent-arn2-1.xx&oh=6b88573e7c9e0bc7eca1ff431692eed0&oe=5EBB7061" alt />
          </div>
          <div class="honey-comb">
            <img src="https://cdn.discordapp.com/attachments/679595669043806208/679595817811705876/image0.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/17163_438353905182_3425587_n.jpg?_nc_cat=100&_nc_sid=210fed&_nc_ohc=9y6oijcIcdoAX_rv1Mh&_nc_ht=scontent-arn2-2.xx&oh=51993ae6a741ac03c98ab6914a0806ef&oe=5EBDFFCC" alt />
          </div>
        </div>

        <div class="combs2">
          <div class="honey-comb">
            <img src="https://cdn.discordapp.com/attachments/666291936042156032/679618288229023748/0.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://cdn.discordapp.com/attachments/633950346795810817/679610197529853962/mriduava.jpg" alt />
          </div>
          <div class="honey-comb">
            <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/86810204_3654208767955158_41435074217902080_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=zqj0b_CnCY4AX-_omlP&_nc_ht=scontent-arn2-1.xx&_nc_tp=6&oh=6c783902c3cad3cefd0be4ce39917ae5&oe=5ECBECF4" alt />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 tack center">
          <h6>
           Inspirerade av lagarbete. Varmt deltagande och tålamod utav all teammedlemmar är det som gör att vi sticker ut från mängden. Trots att vi är nya i branschen, kan vi erbjuda högsta kvalité på vår service till våra kunder. Vi är dynamiska, passionerade och gör det bästa utav allting. Vår vision är att alla våra kunder ska ha sin livs bästa bioupplevelse. Gå på POP THAT BIO idag och få en oförglömlig upplevelse. </h6>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/images/thkLund.jpg" />
      </div>
    </div>
    <div class="section white">
      <div class="row container">
        <div class="row about">
          <div class="col s12">
            <h4 class="contact center">Contact Us</h4>

            <div class></div>
          </div>

          <div class="row">
            <div class="col s12 tack center">
              <h5>pop that bio</h5>
              <h6>Kalkstenvagen 3, Lund</h6>
              <h6>+460317396969</h6>
              <h6> info@popthatbio.se</h6>
              <h6>www.popthatbio.now.sh</h6>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img
          src="https://www.thetimes.co.uk/expert-traveller/wp-content/uploads/2018/11/GettyImages-664356146-2200x880.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let elems = document.querySelectorAll(".parallax");
    this.$M.Parallax.init(elems);
  }
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: queen;
  src: url("../assets/fonts/queen.ttf");
}

.container-fluid {
  position: relative;
  top: -99px;
  margin-bottom: -100px;
  background: rgb(243, 243, 243);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 90%,
    rgba(219, 166, 195, 0.99) 95%
  );
}

.title-text {
  font-family: queen;
  font-size: 8.5rem;
  padding-top: 50px;
  background: linear-gradient(to right, rgb(237, 44, 255) 40%, #03e74f 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.combs,
.combs2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.combs2 {
  position: relative;
  top: -46px;
}
.honey-comb {
  max-width: 200px;
  height: 200px;
  margin: 0.4%;
  border: 2px solid slategray;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.honey-comb img {
  width: 100%;
}
hr {
  position: relative;
  top: -37px;
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

@media (min-width: 1024px) and (max-width: 1280px) {
  .combs2 {
    top: 0;
  }
  .honey-comb {
    max-width: 140px;
    min-width: 100px;
    height: 140px;
  }
}
@media (min-width: 300px) and (max-width: 812px) {
  .container-fluid {
    position: relative;
    top: -70px;
    margin-bottom: -73px;
  }
  .title-text {
    font-family: queen;
    font-size: 5rem;
  }

  hr {
    top: -30px;
  }
  .combs2 {
    top: 0;
  }
  .honey-comb {
    max-width: 120px;
    min-width: 120px;
    height: 120px;
  }
}
</style>