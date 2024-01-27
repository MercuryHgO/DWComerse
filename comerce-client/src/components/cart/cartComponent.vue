<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div
            v-for="cart in carts"
            :key="cart"
            class="el col-xl-6 col-md-6 col-sm-12"
        >
          <cart-item-component></cart-item-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItemComponent from "@/components/cart/cartItemComponent";
export default {
  name: "cartComponent",
  components: {cartItemComponent},
  data(){
    return{
      carts: [
          {
            id:'a124',
            name: 'пончик yellow',
            category: 'пончики',
            title: 'излюбленное лакомство, которое можно описать как ' +
                'жареное в масле кондитерское изделие, обычно круглой формы',
            price: 1199,
            quantity: 1
        }
      ,2,3,4,5]
    }
  }

}
</script>

<style lang="scss" scoped>
.catalog{
  margin: 20px;
.container{
  align-items: center;
}
.row{
.el{
  margin: 10px 0;
  display: flex;
  justify-content: center;
}
}
}
</style>