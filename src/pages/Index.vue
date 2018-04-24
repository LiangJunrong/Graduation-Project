<template>
  <el-row id="Index">
    <el-col>
      <el-card>
        <img src="/static/index.jpg" alt="首页" class="img-responsive">
      </el-card>
    </el-col>
    <el-row>
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">&nbsp;</el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card>
          <h3 class="text-center">欢迎来到便捷校园</h3>
          <p class="text-indent2">
            很多发明的诞生,只是因为人们想“偷懒”。而“懒人”，往往能带来许许多多的便利，在这里，欢迎各位“懒友”加入参观便捷校园~
          </p>
          <p class="text-indent2">
            ☆ 在这里，你可以销售你不需要的二手商品.
          </p>
          <p class="text-indent2">
            ☆ 在这里，你可以加入组织，找小伙伴一起跑步.
          </p>
          <p class="text-indent2">
            ☆ 在这里，你可以在忙得脱不开身的时候找人代拿快递.
          </p>
          <p class="text-indent2">
            ☆ 在这里，你可以找到你渴求的学习组织,和小伙伴一起进步.
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="step-bottom">
              <h4>在华懒界面，你可以：</h4>
              <el-steps direction="vertical" :active="4" align-center>
                <el-step title="弄弄华懒功能"></el-step>
                <el-step title="溜溜话题板块"></el-step>
                <el-step title="玩玩小小游戏"></el-step>
                <el-step title="写写记事便签"></el-step>
              </el-steps>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="step-bottom">
              <h4>在市场界面，你可以：</h4>
              <el-steps direction="vertical" :active="4" align-center>
                <el-step title="卖不需要的货"></el-step>
                <el-step title="找需要的东西"></el-step>
                <el-step title="收藏渴求商品"></el-step>
                <el-step title="删除已卖商品"></el-step>
              </el-steps>
            </el-col>
          </el-row>
          <hr class="hr-top"/>
          <p>介绍如上，你Get到了吗？如果你Get到了，那么就去这些地方逛逛吧！</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="friend-link" type="flex" justify="center">
      <el-button-group>
        <el-button type="primary" circle icon="el-icon-edit" @click="dialogFormVisible = true">联系作者</el-button>
        <a href="http://www.liangjunrong.com" target="_black">
          <el-button type="primary" circle icon="el-icon-share">友情链接</el-button>
        </a>
        <el-button type="primary" circle icon="el-icon-info" @click="goAbout()">关于华懒</el-button>
      </el-button-group>
    </el-row>
    <el-dialog custom-class="create-comment" width="360px" :visible.sync="dialogFormVisible">
      <h3>小伙伴们可以添加我的微信和QQ，</h3>
      <h3>一起讨论编程哦~</h3>
      <img src="/static/WeChat.jpg" alt="微信二维码" class="img">
      <p class="text-center">扫一扫上面的二维码，加我微信</p>
      <img src="/static/QQ.jpg" alt="QQ二维码" class="img">
      <p class="text-center">扫一扫上面的二维码，加我Q Q</p>
      <img src="/static/WebSite.png" alt="网站地址" class="img">
      <p class="text-center">保存上面的二维码，可以分享该网站给好友哦~</p>
    </el-dialog>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
      }
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getIndex();
    },
    methods: {
      getIndex() {
        this.$store.commit("updateNavHeaderActiveIndex", "/");
      },
      goAbout() {
        this.$router.push({
          name: 'About'
        });
      }
    }
  }

</script>
<style scoped>
  .el-button-group {
    position: relative;
    display: inline-block;
    margin: 0 auto;
  }

  .friend-link {
    margin-top: 20px;
  }

  .img-responsive {
    width: 100%;
    height: 100px;
  }

  .img {
    width: 321px;
  }

  .hr-top {
    margin-top: 30px;
  }

  .step-bottom{
    padding-bottom: 15px;
    height: 300px;
  }
</style>
