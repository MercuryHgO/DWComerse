<template>
  <div>
    <p>
      <label>Цена</label>
      {{maxPrice}}
      {{minPrice}}
    </p>
    <div class="price-input">
      <div class="field">
        <input type="number" class="input-min" value="2500">
      </div>
      <div class="separator"></div>
      <div class="field">
        <input type="number" class="input-max" value="7500">
      </div>
    </div>
    <div class="slider">
      <div class="progress"></div>
    </div>
    <div class="range-input">
      <input
          type="range"
          class="range-min"
          min="0"
          max="10000"
          value="2500"
          step="100"
      >
      <input
          type="range"
          class="range-max"
          min="0"
          max="10000"
          value="7500"
          step="100"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "myRangeFilterComponent",
  data(){
    return{
      minPrice: 0,
      maxPrice: 0
    }
  },
  methods:{

  },
  mounted() {
    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
        this.minPrice = parseInt(priceInput[0].value)
        this.maxPrice = parseInt(priceInput[1].value)

        if((this.maxPrice - this.minPrice >= priceGap) && this.maxPrice <= rangeInput[1].max){
          if(e.target.className === "input-min"){
            rangeInput[0].value = this.minPrice;
            range.style.left = ((this.minPrice / rangeInput[0].max) * 100) + "%";
          }else{
            rangeInput[1].value = this.maxPrice;
            range.style.right = 100 - (this.maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
    rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
        this.minPrice = parseInt(rangeInput[0].value)
        this.maxPrice = parseInt(rangeInput[1].value);

        if((this.maxPrice - this.minPrice) < priceGap){
          if(e.target.className === "range-min"){
            rangeInput[0].value = this.maxPrice - priceGap
          }else{
            rangeInput[1].value = this.minPrice + priceGap;
          }
        }else{
          priceInput[0].value = this.minPrice;
          priceInput[1].value = this.maxPrice;
          range.style.left = ((this.minPrice / rangeInput[0].max) * 100) + "%";
          range.style.right = 100 - (this.maxPrice / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  }
}

</script>

<style scoped>

::selection{
  color: #fff;
  background: #d6577b;
}
.price-input{
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field{
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input{
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 12px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator{
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider{
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress{
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #db5579;
}
.range-input{
  position: relative;
}
.range-input input{
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb{
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #b96484;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
input[type="range"]::-moz-range-thumb{
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #ea4f75;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
</style>