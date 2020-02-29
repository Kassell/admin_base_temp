<template>
    <div>
        测试
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
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
.nav {
  width: 200px;
  height: 100vh;
  background: #304156;
  /* position: absolute;
  left: 0;
  top: 0; */
}
.header {
  width: calc(100vw - 200px);
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
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