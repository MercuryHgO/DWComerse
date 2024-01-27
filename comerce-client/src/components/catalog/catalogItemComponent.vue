<template>
  <div class="card p-2" style="width: 18rem;">
    <div class="card__img">
      <img
          :src="require(`../../assets/img/p1.jpg`)"
           alt="...">
    </div>
    <div class="card-body">
      <p class="card-name">Пончик розовый</p>
      <p class="card-subtitle">Пончики</p>
    </div>
    <div class="brak fs-4">
      <span class="price">1200 P</span>
      <i class="fi fi-rr-shopping-cart"></i>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/myButton";
export default {
  name: "catalogItemComponent",
  components: {MyButton}
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
.card{
  padding: 5px;
  .card__img{
    text-align: center;
  }
  img{
    overflow: hidden;
    max-width: 120px;
    height: auto;
  }
  .brak{
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    .price{
      font-weight: 400;
      font-size: 16px;
    }
  }
  .card-name{
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0;
    color: #3e3e3e;
  }
  .card-subtitle{
    font-size: 12px;
    margin: 5px 0;
    padding: 0;
    color: #9f9f9f;
  }
  .fi-rr-shopping-cart{
    color: #F64C72;
    cursor: pointer;
  }
  .fi-rr-shopping-cart:hover{
    color: var(--color1);
  }
}
</style>