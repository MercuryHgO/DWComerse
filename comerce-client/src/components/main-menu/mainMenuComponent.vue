<template>
  <div class="container mt-4">
    <div class="col-xl-12 col-md-12 col-sm-12">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/img/post_rek.png" class="item_photo d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/img/post_rek.png" class="item_photo d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/img/post_rek.png" class="item_photo d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="col mt-2">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-sm-12 mt-md-2 mt-sm-2">
          <div class="carousel-item active item_photo_card">
            <img src="../../assets/img/post_rek.png" class="item_photo d-block w-100" alt="...">
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 mt-md-2 mt-sm-2">
          <div class="carousel-item active item_photo_card">
            <img src="../../assets/img/post_rek.png" class="item_photo d-block w-100" alt="...">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "mainMenuComponent"
}
</script>

<style lang="scss" scoped>
.item_photo_card{
  border-radius: 12px;
  overflow: hidden;
}
.carousel-inner{
  border-radius: 12px;
  .carousel-item{
    .item_photo{
      width: 100%;
      height: auto;
      background-position: center;
      overflow: hidden;
    }
  }
}


</style>