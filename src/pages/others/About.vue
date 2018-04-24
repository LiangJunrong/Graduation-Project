<template>
  <div class="about">
    <!-- 项目介绍 -->
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <el-card class="introduce">
          <h3 class="text-center text-primary">关于华软-便捷校园</h3>
          <p class="text-indent2">
            华软-便捷校园开工于2017年11月1日。开发这个APP的初衷，是因为我觉得现在同学间的沟通越来越少了，然后一些学校间的消息，流广度也不高，所以，想开发一个WebAPP。</p>
          <p class="text-indent2">这个APP，可以找小伙伴一起跑步，可以在忙得脱不开身的时候找人代拿快递，可以找到想要的学习组织。所以，我决定毕设就用这个APP了，一举两得！</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <!-- 项目进程 -->
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4 class="text-center text-primary">便捷校园-项目进程</h4>
          </div>
          <div style="height: 2888px;">
            <el-steps direction="vertical" :active="31">
              <el-step title="2018年4月18日" description="完善论文和代码，封结" icon="el-icon-success"></el-step>
              <el-step title="2018年4月11日-2018年4月17日" description="休息" icon="el-icon-success"></el-step>
              <el-step title="2018年4月10日" description="写毕业论文" icon="el-icon-success"></el-step>
              <el-step title="2018年4月9日" description="写毕业论文" icon="el-icon-success"></el-step>
              <el-step title="2018年4月8日" description="写毕业论文" icon="el-icon-success"></el-step>
              <el-step title="2018年4月7日" description="休息一天" icon="el-icon-success"></el-step>
              <el-step title="2018年4月6日" description="基本完工，感谢自己的辛苦" icon="el-icon-success"></el-step>
              <el-step title="2018年4月5日" description="完善社区接口及其界面美化" icon="el-icon-success"></el-step>
              <el-step title="2018年4月4日" description="完成游戏和便签模块，并开始商品接口完善及其界面美化" icon="el-icon-success"></el-step>
              <el-step title="2018年4月3日" description="完成登录注册的校验及界面完善" icon="el-icon-success"></el-step>
              <el-step title="2018年4月2日" description="完成前端路由守卫即组件懒加载" icon="el-icon-success"></el-step>
              <el-step title="2018年4月1日" description="完成华懒及聊天全部基本功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月31日" description="完成华懒及其话题的增查功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月29日-2018年3月31日" description="广州游玩" icon="el-icon-success"></el-step>
              <el-step title="2018年3月28日" description="完成华懒的增查功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月27日" description="完成注册以及增查华懒功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月26日" description="完成商品增删改查及收藏功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月24-2018年3月25日" description="休息" icon="el-icon-success"></el-step>
              <el-step title="2018年3月23日" description="调试小bug，找毕设老师交初稿" icon="el-icon-success"></el-step>
              <el-step title="2018年3月22日" description="编写毕业论文，并对服务器进行Nginx代理" icon="el-icon-success"></el-step>
              <el-step title="2018年3月21日" description="完善商品及登录功能" icon="el-icon-success"></el-step>
              <el-step title="2018年3月20日" description="调整数据库结构，修改HTML映射数据，完善商品收藏功能，设置登录路由跳转" icon="el-icon-success"></el-step>
              <el-step title="2018年3月19日" description="调整数据库，各个模块能根据json展现信息" icon="el-icon-success"></el-step>
              <el-step title="2018年3月18日" description="全面施工，开始根据已学技术覆盖各模块，部署项目到服务器" icon="el-icon-success"></el-step>
              <el-step title="2018年3月17日" description="登录模块实现" icon="el-icon-success"></el-step>
              <el-step title="2018年3月16日" description="设计MongoDB数据库，实现商品分页、下拉加载，以及收藏商品、展示收藏的商品页" icon="el-icon-success"></el-step>
              <el-step title="2018年3月9日-2018年3月15日" description="沉迷游戏，逃避代码，无法自拔" icon="el-icon-success"></el-step>
              <el-step title="2018年3月8日" description="安装配置MongoDB" icon="el-icon-success"></el-step>
              <el-step title="2018年3月7日" description="尝试使用node将项目部署到云服务器上，花了一天上午，结果失败" icon="el-icon-success"></el-step>
              <el-step title="2017年11月16日-2018年1月30日" description="期间进行了两个半月的实习" icon="el-icon-success"></el-step>
              <el-step title="2017年11月1日" description="毕业设计开工" icon="el-icon-success"></el-step>
            </el-steps>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <!-- 编程轶事 -->
      <el-col :span="24" :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <el-card>
          <div slot="header" class="header">
            <h4 class="text-center text-primary">编程轶事</h4>
          </div>
          <div>
            <p class="text-indent1">☆ 4月2日，花了大半天，就解决一个前端问题，好难受，一天时间都檬茶茶的！</p>
            <p class="text-indent1">☆ 3月16日，设计数据库的时候，已经完成了一条数据库数据，但是手贱点了另外的地方，结果因为没保存，数据直接丢失掉了，半个钟的花费就没了，好想哭！！！</p>
          </div>
        </el-card>
      </el-col>
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
      this.getAboutInfo();
    },
    methods: {
      //给导航加活跃状态
      getAboutInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/");
      }
    }
  }

</script>
<style scoped>
  .el-card {
    margin-top: 10px;
  }

  .introduce {
    margin-top: 0px;
  }

</style>
