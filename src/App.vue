<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  //JSLiang： 导入NavHeader组件
  import NavHeader from "@/components/NavHeader";
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      NavHeader
    },
    created() { // 加载首页动画
      try {
        document.body.removeChild(document.getElementById('appLoading'))
        setTimeout(function () {
          document.getElementById('app').style.display = 'block';
        }, 500)
      } catch (e) {

      }
    }
  }

</script>

<style>
  /* JSLiang：
    给container写margin-top是迫不得已，
    调试模式下没有这个会导致内容区往上顶，
    但是部署上服务器，则不需要这个 */

  .container {
    margin-top: 70px;
  }

</style>
