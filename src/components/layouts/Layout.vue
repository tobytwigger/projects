<template>
  <div class="content">
    <layout-header></layout-header>
    <div class="container-fluid page-padding">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import LayoutHeader from "./LayoutHeader";

  export default {
    name: "Layout",
    components: {
      LayoutHeader
    }
  }
</script>

<style scoped>

</style>
