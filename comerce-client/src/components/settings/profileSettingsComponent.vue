<template>
  <div class="profile">
    <div class="row">
      <div class="col-12 profile_img_body">
        <div class="profile_img">
          <img src="../../assets/img/p1.jpg">
        </div>
      </div>
      <div class="col-12 text-center">
        <h2>Ivan Ivanov</h2>
      </div>
      <div class="col-12">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action">Войти в аккаунт</button>
          <button type="button" class="list-group-item list-group-item-action">Настройки профиля</button>
          <button type="button" class="list-group-item list-group-item-action text-danger">Выйти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileSettingsComponent"
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