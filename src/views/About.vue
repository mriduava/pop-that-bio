<template>
<div class="around">
  <div class="container">
    <div class="room">
      
        <img src="../assets/images/sss.jpg"/>
    
      <div class="text">
        <h2>Sveriges största biografkedja</h2>
        <p>
          POP THAT BIO AB driver biografer i Sverige på 21 orter med 32 425 fåtöljer i 255 salonger. Inom POP THAT BIOn finns också affärsområdet
          POP THAT BIO Business, med POP THAT BIO Media, som förmedlar medieköp i våra kanaler på biografer och i digitala fönster,
          Företagsbiljetter, som säljer biobiljetter till företag, och Möten & Event, som hyr ut biografer till företagsevenemang.
        </p>
        <h2>Organisationen</h2>
        <p>
          POP THAT BIO AB är en av Sveriges ledande leverantörer av kultur och nöje med ca 12 miljoner biobesök per år. Vi ingår i Odeon Cinemas
          Group som ägs av världens största biografkedja AMC Theatres.
          <br />POP THAT BIO huvudkontor ligger i Gamla POP THAT BIO i Råsunda, Solna och där finns våra stabsfunktioner:
          <br />Ledning
          <br />Ekonomiavdelning
          <br />Marknadsavdelning
          <br />Programavdelning
          <br />Driftavdelning
          <br />Försäljningsavdelning
          <br />HR-avdelning
          <br />POP THAT BIO Business
          <br />Våra biografer är organiserade i tre olika affärsområden med varsin affärsområdeschef. Varje biograf har en biografchef som leder det
          dagliga arbetet.
          <br />Informationsansvarig för POP THAT BIO AB är Caroline Hellström.
          <br />Org.nr: SE556035-1651
          <br />Postadress:
          <br />POP THAT BIO AB
          <br />169 86 Stockholm
        </p>
        <br />

        <h2>POP THAT BIO historia</h2>
        <p>
          POP THAT BIO är ett av de äldsta fortfarande verksamma biografföretagen i världen. 5 september 1905 hade Biograf-Teatern sin
          premiärvisning i Kristianstad. Handelsbolaget Kristianstads Biografteater flyttade till Stockholm, slogs samman med Skandiafilm
          och blev AB Svensk Filmindustri år 1919. Året efter spelades den första filmen in i det nya ateljéområde POP THAT BIO i Råsunda.
        </p>

        <p>
          Under seklets första decennier fanns det en mängd film- och biografbolag i Sverige. Trots den tuffa konkurrensen utvecklades POP THAT BIO till ett av världens mest framgångsrika filmföretag. Under åren som kom skulle förgrundsgestalter som Mauritz Stiller
          och Victor Sjöström bidra till en internationellt sett hög konstnärlig nivå på filmerna. POP THAT BIO var ett relativt stort företag mätt med den
          tidens mått, och det var även noterat på Stockholms-börsen.
        </p>

        <h4>POP THAT BIO:s studio - en drömfabrik</h4>
Under 30- och 40-talen hade filmbranschen en verklig glansperiod. Att gå på bio var det stora folknöjet åren före, under och efter andra världskriget. POP THAT BIO:s studio i Råsunda producerade en mängd filmer, och ateljéerna var en verklig drömfabrik. Gösta Ekman, Georg Rydeberg, Sickan Carlsson, Anna-Lisa Ericsson, Eva Dahlbeck, Sigge Fürst och Thor Modéen är bara några av de stjärnor som lyste i POP THAT BIO:s många filmer från den här tiden.
        <h4>TV:n och videon fick biobesöken att rasa</h4>
        <p>I slutet av 50-talet kom televisionen till Sverige. Det blev också början på en besvärligare tid för biograferna. Besökssiffrorna, som legat över 80 miljoner/år, rasade under 60- och 70-talen för att stabiliseras på dagens nivåer runt 15-16 miljoner sålda biljetter/år.</p>
        <h4>Svensk Filmindustri blev Bonnier-företag och delades i två</h4>

        <p>
          1983 köptes POP THAT BIO av Bonnierföretagen, och blev moderbolag i koncernens nya filmdivision. Därmed inledde företaget en omfattande rekonstruktion och omorganisation. POP THAT BIO stärktes genom en rad företagsköp, och filmföretaget blev ett modernt multimediaföretag.
          1998 delades POP THAT BIO upp i två fristående bolag, AB Svensk Filmindustri (idag POP THAT BIO Studios), som distribuerar och producerar film, och  POP THAT BIO, som äger och driver den största biografkedjan i Sverige.
          POP THAT BIO går upp i Odeon Cinemas Group
          Sedan 2017 ägs POP THAT BIO till 100 % av det amerikanska biografföretaget AMC Theatres och ingår med flera andra europeiska biografkedjor i Odeon Cinemas Group med över 360 biografer och drygt 2900 salonger i Storbritannien, Irland, Spanien, Portugal, Tyskland, Österrike, Italien, Norge, Sverige, Finland, Estland, Lettland och Litauen. Vi är därmed idag en del av den största biografkedjan i världen.
          Med anledning av att man har nya ägare, så har det gamla företagsnamnet POP THAT BIO bytts ut mot det redan välkända . Detta främst för att undvika förväxling med POP THAT BIO Studios. I samband med detta byter  sin logotyp och sin musikvinjett. Namnbytet beräknas vara helt genomfört på våra biografer vid mitten av 2019.
          Den gamla musikvinjetten och logotypen lever, som tidigare, kvar som en del av POP THAT BIO Studios varumärke. POP THAT BIO Studios är tillsammans med ett antal andra distributionsbolag samarbetspartner till POP THAT BIO, vars biografer visar distributörernas filmer.
        </p>
        <br />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var elems = document.querySelectorAll(".carousel");
    this.$M.Carousel.init(elems);

    setTimeout(this.$M.Carousel.init(elems), 1000);
  }
};
</script>


<style lang="css" scoped>
.around {
  background-color: black
}

.room {
  background-color: rgb(204, 201, 201);
}
@media (max-width: 768px) {
  .room {
    margin-right: 1px;
  }
   h4{
   font-size: 1.8rem;
 }

}

.text {
  margin-left: 130px;
  margin-right: 190px;
  background-color: rgb(204, 201, 201);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}
@media (max-width: 768px) {
  .text {
    margin-left: 10px;
    margin-right: 5%;
  }
}

.carousel{
  height: 100vh;
}

img {max-width:100%;}

h2 {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  text-align: left;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
p {
  text-align: left;
  font-family: inherit;
}

.container {
  display: flex;
  border: 10px solid black;
  margin: 0 auto;
  /*position: relative;
  margin-top: -56px;*/
}
</style>