<template>
  <div class="index-container">
    <Nav/>
    <div class="main-container">
      <Header />
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>

import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: "layout",
  data() {
    return {};
  },
  components:{
    Nav,
    Header
  }
};
</script>
<style>
.index-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.main-container {
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  height: 100%;
}
</style>