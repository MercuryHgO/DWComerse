<template>
  <header-component></header-component>
  <router-view/>
</template>

<script>
import headerComponent from "@/components/header/headerComponent";

export default {
  name: "main",
  components: {
    headerComponent
  }
}
</script>

<style scoped>

</style>