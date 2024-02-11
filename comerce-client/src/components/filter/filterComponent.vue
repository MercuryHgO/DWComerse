<template>
  <div class="filter">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Категории
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            Пончики
          </div>
          <div class="accordion-body">
            Лакриция
          </div>
          <div class="accordion-body">
            Мед
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Цена
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
              <my-range-filter-component/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyRangeFilterComponent from "@/components/filter/myRangeFilterComponent";
export default {
  name: "filterComponent",
  components: {MyRangeFilterComponent}
}
</script>

<style lang="scss" scoped>
.accordion-item{
  border: none;
}
.accordion-body{
  margin-left: 12px;
}
.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background: none;
  box-shadow: none;
}
.accordion-button:focus {
  border-color: rgba(255, 255, 255, 0);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}
.accordion-button[data-v-5bfa9a44]:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background: none;
  box-shadow: none;
}
.accordion-button:focus {
  z-index: 3;
  border-color: rgba(255, 255, 255, 0);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}
.accordion-button[data-v-5bfa9a44]:focus {
  z-index: 3;
  border-color: rgba(255, 255, 255, 0);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}
</style>