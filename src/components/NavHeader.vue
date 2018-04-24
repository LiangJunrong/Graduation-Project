<template>
  <!-- 
    router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    default-active：当前激活菜单的 index
    mode：模式
  -->
  <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/" class="el-icon-caret-right">
      首页
    </el-menu-item>
    <el-menu-item index="/MyOrgIndex">
      华懒
    </el-menu-item>
    <el-menu-item index="/MktIndex">
      市场
    </el-menu-item>
    <el-menu-item index="/UserIndex">
      我的
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    }
  }

</script>
<style>
  .el-menu-demo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

</style>
