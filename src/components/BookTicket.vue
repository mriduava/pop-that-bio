<template>

    <div>
        <div class="container">
            <div><h5>Tillbaka</h5></div>
            <div><h4>Antal biljetter</h4></div>
            <div class="ordinarie">
                <div class="ordinarie-mini"><h6>Ordinarie</h6></div>
                <div class="buttons">
                <div><i @click="decreaseOrd()" class="fa fa-minus-circle"></i></div>
                <div><h6>{{ counterOrd }}</h6></div>
                <div><i @click="increaseOrd()" class="fa fa-plus-circle"></i></div>
                </div>
            </div>
            <div class="ordinarie">
                <div class="ordinarie-mini"><h6>Pensionär</h6></div>
                <div class="buttons">
                <div><i @click="decreasePen()" class="fa fa-minus-circle"></i></div>
                <div><h6>{{ counterPen }}</h6></div>
                <div><i @click="increasePen()" class="fa fa-plus-circle"></i></div>
                </div>
            </div>
            <div class="barn"><h6>Barn</h6></div>
            <div class="valj"><button class="waves-effect purple btn-large">Välj platser</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bookticket'
    ,
    data(){
        return{
            counterOrd: 1,
            counterPen: 1
        }
    },
    methods: {
        increaseOrd(){
            if((this.counterOrd + this.counterPen) < 8){
            this.counterOrd++
            
            }
            
        },
        decreaseOrd(){
            if((this.counterOrd + this.counterPen) > 1){
            this.counterOrd--
            }
        },
        increasePen(){
            if((this.counterOrd + this.counterPen) < 8){
            this.counterPen++
            
            }
            
        },
        decreasePen(){
            if((this.counterOrd + this.counterPen) > 1){
            this.counterPen--
            }
        }
    }
}
</script>

<style lang="css" scoped>

.container {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 auto;
    width: 30%
}

.ordinarie {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*border: 1px solid black*/
}

.ordinarie-mini {
    display: flex;
    align-content: flex-start;
    /*border: 1px solid black*/
}

.buttons {
    display: flex;
    flex-direction: row;
    /*border: 1px solid black;*/
    align-items: center;
}

.valj {
    display: flex;
    justify-content: center;
    /*border: 1px solid black;*/
    padding-top: 60px
}

.fa {
    font-size: 40px;
    padding: 8px
}
  
</style>