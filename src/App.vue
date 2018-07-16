<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
};
</script>

<style>
  .el-message {
    min-width: 60%;
  }
  #app {
    width: 100%;
    background: #ffffff;
    height: auto;
  }
  .router-link {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    color: #000;
  }
  .W-complete {
    width: 100%;
    text-align: center;
    padding: 5% 0;
    color: #999;
    font-size: 14px;
  }
</style>
