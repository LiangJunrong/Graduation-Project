<template>
  <div class="game">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
        <el-card class="introduce">
          <h3 class="text-center text-primary">小小游戏</h3>
          <p class="text-indent2 text-top">你喜欢游戏吗？日常生活中有接触过各种各样的游戏吗？电脑游戏还是手机？角色模拟还是动作决斗……不过，在这里，只有各种各样的小游戏~所以，消耗你一点点无聊时间的时候，就过来这里吧~</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
      <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4 class="text-center text-primary">3D魔方</h4>
          </div>
          <div>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img src="/static/game-image/Game-3DMagicCute.jpg" alt="3D魔方" class="img-responsive">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="introduce">
              <p class="text-indent2">这个小游戏会提供你一个4*4*4的小魔方，简单易玩，刷刷把它拼完吧！</p>
              <p class="text-center">
                <router-link to="/GameMagicCube">
                <el-button type="primary">点击前往</el-button>
              </router-link>
              </p>
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4 class="text-center text-primary">五子棋</h4>
          </div>
          <div>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img src="/static/game-image/Game-GoBang.png" alt="3D魔方" class="img-responsive">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="introduce">
              <p class="text-indent2">五子棋小游戏提供个15*15的棋盘，然后这个棋盘你可以随时保存下来的哦~想消遣的可以去看看~</p>
              <p class="text-center">
                <router-link to="/GameGoBang">
                <el-button type="primary">点击前往</el-button>
              </router-link>
              </p>
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getGameInfo();
    },
    methods: {
      //给导航加活跃状态
      getGameInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
      }
    }
  }

</script>

<style scoped>
  .img-responsive {
    width: 100%;
    height: auto;
  }

  .introduce {
    padding-left: 1.2em;
  }

  .box-card {
    margin-top: 10px;
  }

</style>
