<template>
  <main class="page-padding">
    <router-view></router-view>
  </main>
</template>

<script>

  import Header from "./components/layouts/LayoutHeader";

  export default {
    name: 'app',
    components: {Header},
  }
</script>

<style lang="scss">

</style>
