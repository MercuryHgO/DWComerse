<template>
  <div class="catalog">
    <div class="container">
      <div class="inner__catalog row">
        <div class="col-2">
          <div class="col-xl-12 col-md-12 col-sm-12">
            <filter-component/>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="input-group mb-3">
              <my-button class="btn btn-outline-secondary" type="button" id="button-addon1">
                <i class="fi fi-rr-search"></i>
              </my-button>
              <input type="text" class="form-control" placeholder="Поиск по названию..." aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
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
    </div>
  </div>
</template>

<script>
import CatalogItemComponent from "@/components/catalog/catalogItemComponent";
import {mapActions, mapGetters} from 'vuex'
import FilterComponent from "@/components/filter/filterComponent";
import MyButton from "@/components/UI/myButton";

export default {
  name: "catalogComponent",
  components: {MyButton, FilterComponent, CatalogItemComponent},
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
@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
.catalog{
  margin: 20px;
  .container{
    align-items: center;
  }
  .inner__catalog{
    display: flex;
    justify-content: space-between;
    .form-control{
      border: #F64C72 2px solid;
      border-radius: 12px;
    }
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