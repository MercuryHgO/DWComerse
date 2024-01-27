<template>
  <div class="row">
    <div class="col-12">
      <div class="form-group">
        <label></label>
        <input type="text" class="form-control" name="" aria-describedby="helpId">
        <small class="form-text text-muted">Название</small>
      </div>
      <div class="form-group">
        <label></label>
        <textarea class="form-control" name="" id="" rows="3"></textarea>
        <small class="form-text text-muted">Описание</small>
      </div>
      <div class="form-group mb-5">
        <label></label>
        <input type="number" class="form-control" name="" aria-describedby="helpId">
        <small class="form-text text-muted">Цена</small>
      </div>
      <div class="form-group">
        <label></label>
        <input type="file" id="img_form" class="form-control-file" name="img" placeholder="выберите фотографию товара" aria-describedby="fileHelpId">
        <small class="form-text text-muted">фото товара</small>
      </div>
      <div class="col-12 text-end mt-4">
        <my-button>Добавить</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "@/components/UI/myButton";
export default {
  name: "addProductSettingsComponent",
  components: {myButton}

}
</script>

<style scoped>

</style>