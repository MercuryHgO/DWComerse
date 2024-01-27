<template>
  <div class="settings_comp mt-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-md-4 col-sm-12">
          <div class="list-group" id="list-tab" role="tablist">
            <a
                @click="pageTarget=1"
                class="list-group-item list-group-item-action"
                :class="pageTarget===1 ? 'active' : ''"
            >
              Профиль
            </a>
            <a
                @click="pageTarget=2"
                class="list-group-item list-group-item-action"
                :class="pageTarget===2 ? 'active' : ''"
            >
              Все товары
            </a>
            <a
                @click="pageTarget=3"
                class="list-group-item list-group-item-action"
                :class="pageTarget===3 ? 'active' : ''"
            >
              Корзина
            </a>
            <a
                @click="pageTarget=4"
                class="list-group-item list-group-item-action"
                :class="pageTarget===4 ? 'active' : ''"
            >
              Добавить товары
            </a>
          </div>
        </div>
        <div class="col-xl-8 col-sm-12">
          <div class="tab-content" id="nav-tabContent">
            <profile-settings-component v-if="pageTarget === 1"/>
            <products-settings-component v-if="pageTarget === 2"/>
            <carts-settings-component v-if="pageTarget === 3"/>
            <add-product-settings-component v-if="pageTarget === 4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSettingsComponent from "@/components/settings/profileSettingsComponent";
import productsSettingsComponent from "@/components/settings/productsSettingsComponent";
import cartsSettingsComponent from "@/components/settings/cartsSettingsComponent";
import addProductSettingsComponent from "@/components/settings/addProductSettingsComponent";

export default {
  name: "settingsComponent",
  components: {
    ProfileSettingsComponent,
    productsSettingsComponent,
    cartsSettingsComponent,
    addProductSettingsComponent
  },
  data(){
    return{
      pageTarget: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.settings_comp{
  .list-group-item{
    cursor: pointer;
  }
  .list-group-item.active{
    border: 1px solid var(--color3);
    background-color: var(--color3);
}
}
</style>