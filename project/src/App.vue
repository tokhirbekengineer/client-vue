<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  }
}
</script>
