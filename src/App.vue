<template>
  <div id="app">
    <app-header-page></app-header-page>
    <router-link to="/"></router-link>
    <router-link to="/mydashboard"></router-link>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from "./shared/HeaderPage.vue"
export default {
  components : {
    AppHeaderPage : HeaderPage,
  }
}
</script>


<style>

</style>