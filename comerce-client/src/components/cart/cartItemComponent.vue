<template>
  <div class="card" style="width: 20rem;">
    <div class="card__img">
      <img src="../../assets/img/p2.jpg" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <p class="card-name">Пончик с глазурью</p>
      <p class="card-subtitle">Пончики</p>
    </div>
    <div class="brak fs-4">
      <span class="price">14320 P</span>
      <i class="fi fi-br-trash"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartItemComponent"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css');
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
  .fi-br-trash{
    color: #F64C72;
    cursor: pointer;
  }
  .fi-br-trash:hover{
    color: var(--color1);
  }
}
</style>