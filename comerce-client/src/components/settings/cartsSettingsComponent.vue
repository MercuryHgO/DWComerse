<template>
<div class="row">
  <div class="col-12 profile_img_body">
    <div class="profile_img">
      <img src="../../assets/logo_1.png">
    </div>
  </div>
  <div class="col-12 text-center mb-2">
    <h2>0 товаров</h2>
  </div>
  <div class="col-12">
    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action">Перейти к покупкам</button>
      <button type="button" class="list-group-item list-group-item-action">Перейти к оплате</button>
      <button type="button" class="list-group-item list-group-item-action text-danger">Очистить корзину</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "cartsSettingsComponent"
}
</script>

<style lang="scss" scoped>
.profile_img_body{
  display: flex;
  justify-content: center;
.profile_img{
  width: 100px;
  height: 100px;
  align-items: center;
  border: 1px solid #eee;
  box-shadow: 0 0 8px 0 #eee;
  border-radius: 50%;
  overflow: hidden;
img{
  width: 100%;
  align-items: center;
  position: relative;
}
}
}
</style>