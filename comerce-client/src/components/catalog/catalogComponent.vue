<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div
            v-for="el in PRODUCTS"
            :key="el"
            class="el col-xl-3 col-md-6 col-sm-12"
        >
          <catalog-item-component/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItemComponent from "@/components/catalog/catalogItemComponent";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "catalogComponent",
  components: {CatalogItemComponent},
  data(){
    return{
      products: [
        {
          id:'a123',
          name: 'пончик pink',
          category: 'пончики',
          title: 'излюбленное лакомство, которое можно описать как ' +
              'жареное в масле кондитерское изделие, обычно круглой формы',
          price: 1200,
        },2,3,4,5]
    }
  },
  methods:{
    ...mapActions([
        'GET_PRODUCT_FROM_API'
        ])
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ]),
    filterProducts(){
      return this.PRODUCTS
    }
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
      .then(res => {
        if (res.data){
          console.log(res.data)
        }
      })
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