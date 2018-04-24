<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card>
      <img src="/static/NotFound.gif" alt="找不到界面">
      <h3>滴滴滴~404！找不到这个页面哦~</h3>
      <p>亲，是不是你复制错链接，进错地址了~</p>
      <p>
        <router-link class="text-primary" to="/">
          点我，返回首页！
        </router-link>
      </p>
    </el-card>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    mounted() {
      this.getNotFound();
    },
    methods: {
      getNotFound() {
        console.log("大佬您好~");
        console.log("这是渣渣我的小小demo...");
        console.log("您进入了404页面，不知道您老想要？……");
        console.log("请大佬手下留情，谢谢！");
      }
    }
  }

</script>
<style>


</style>
