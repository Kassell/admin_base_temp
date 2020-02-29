<template>
  <div class="nav">
    <el-menu background-color="#304156" text-color="#bfcbd9" :router='true'>
      <el-menu-item index="/">indx</el-menu-item>
      <el-submenu>
        <template slot="title">group</template>
        <el-menu-item index="/about">about</el-menu-item>
        <el-menu-item index="/home">home</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.nav {
  width: 200px;
  height: 100vh;
  background: #304156;
}
</style>