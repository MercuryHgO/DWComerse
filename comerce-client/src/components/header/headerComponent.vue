<template>
  <nav class="navbar navbar-light bg-grad34">
    <a class="navbar-brand cont" href="#">
      <div class="logo">
        <img src="../../assets/img/pf1.png" class="d-inline-block align-top">
      </div>
      <div class="nav">
        <router-link to="/">
          <div>
            <p class="text-center">
              <i class="fi fi-rr-shop"></i><br>
              Главная
            </p>
          </div>
        </router-link>
        <router-link to="/catalog">
          <div>
            <p class="text-center">
              <i class="fi fi-rr-list"></i><br>
              Каталог
            </p>
          </div>
        </router-link>
        <router-link :to="{name: 'cart'}">
          <div>
            <p class="text-center">
              <i class="fi fi-rr-shopping-cart"></i><br>
              Корзина 0
            </p>
          </div>
        </router-link>
        <router-link :to="{name: 'settings'}">
          <div>
            <p class="text-center">
            <i class="fi fi-rr-settings"></i><br>
            Настройки
            </p>
          </div>
        </router-link>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: "headerComponent"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');

img{
  width: 40px;
  margin-left: 10px;
}
nav{
  .cont{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .nav{
      color: #fff;
      gap: 20px;
      i{
        margin: 0;
        padding: 0;
        font-size: 14px;
      }
      p{
        margin: 0;
        padding: 0;
      }
      a {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
}
</style>