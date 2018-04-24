<template>
  <div class="club">
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MyOrgIndex' }">我的华懒</el-breadcrumb-item>
        <el-breadcrumb-item>华懒广场</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 按钮操作 -->
    <el-card class="box-card club-nav">
      <!-- 发起华懒 -->
      <div slot="header">
        <router-link to="/AddOrg">
          <el-button type="primary" icon="el-icon-plus">发起华懒</el-button>
        </router-link>
      </div>
      <!-- 搜索华懒 -->
      <div class="searchClub">
        <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="formInline.clubName" placeholder="华软跑族" @keyup.enter.native="searchClub('formInline')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchClub('formInline')">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 搜索结果 -->
      <div class="searchResult" v-if="searchTrue">
        <p>你是不是要找：</p>
        <router-link :to="{path:'OrgDetail', query:{'orgId':searchClubs._id}}">
          <el-button type="warning" round>{{searchClubs.clubName}}</el-button>
        </router-link>
      </div>
    </el-card>
    <!-- 华懒列表 -->
    <el-tabs type="border-card">
      <el-tab-pane label="华懒列表">
        <div class="clubsRank text-indent1" v-for="(club,index) in clubInfo" :key="club.id">
          <span class="rankText">No</span>
          <span class="text-warning">{{index+1}}. </span>
          <router-link :to="{path:'OrgDetail', query:{'orgId':club._id}}">
            <span class="text-primary">{{club.clubName}}</span>
          </router-link>
          <p>
            口号：
            <span>{{club.clubDescription}}</span>
          </p>
          <p>
            <span>已响应成员：</span>
            <span class="rankText">{{club.clubMenbers.length}}</span>
          </p>
          <router-link class="button-indent1" :to="{path:'OrgDetail', query:{'orgId':club._id}}">
            <el-button type="primary" size="small">响应号召</el-button>
          </router-link>
          <hr>
        </div>
        <div class="scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <img v-show="loading" src="/static/loading-svg/loading-spinning-bubbles.svg" />
          <p>{{loadingText}}</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的华懒" @click="getMyClubInfo()">
        <!-- 无组织信息展示 -->
        <el-card v-if="!isClubs">
          <p>亲，还没组织吗？</p>
          <p>赶紧去看看隔壁有没有啥有趣的组织适合你吧！</p>
        </el-card>
        <div v-if="isClubs" class="clubsRank" v-for="(club,index) in userClubs" :key="club.id">
          <span class="rankText">No</span>
          <span class="text-warning">{{index+1}}. </span>
          <router-link :to="{path:'OrgDetail', query:{'orgId':club._id}}">
            <span class="text-primary">{{club.clubName}}</span>
          </router-link>
          <p>
            口号：
            <span>{{club.clubDescription}}</span>
          </p>
          <router-link :to="{path:'OrgDetail', query:{'orgId':club._id}}">
            <el-button type="primary" size="small">前往查看</el-button>
          </router-link>
          <hr>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios'
  export default {
    data() {
      return {
        searchTrue: false,
        searchClubs: [],
        formInline: {
          clubName: '',
        },
        clubInfo: [],
        userClubs: [],
        isClubs: false,

        //华懒加载限制
        page: 1,
        pageSize: 4,

        //busy:true表明该下拉加载插件关闭
        busy: true,
        loading: false,
        loadingText: ''
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getClubInfo();
      this.getMyClubInfo();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      //华懒广场
      getClubInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        var param = {
          page: this.page,
          pageSize: this.pageSize,
        };

        //加载动画和文字
        this.loading = true;
        this.loadingText = '正在努力加载...';

        axios.get('/clubs', {
          params: param
        }).then((response) => {
          this.clubInfo = this.clubInfo.concat(response.data.result);
          if (response.data.result.length == 0) {
            this.busy = true;
            this.loading = false;
            this.loadingText = '已经没有更多了哦~';
          } else {
            this.busy = false;
          }
        });
      },
      //我的华懒
      getMyClubInfo() {
        axios.get('/users').then((response) => {
          this.userClubs = response.data.result.userClubs;
          if (this.userClubs.length == '0') {
            this.isClubs = false;
          } else {
            this.isClubs = true;
          }
        })
      },
      //下拉加载
      loadMore() {
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getClubInfo(true);
        }, 500);
      },
      //搜索华懒
      searchClub(clubName) {
        axios.post("/clubs/searchClub", {
          clubName: this.formInline.clubName
        }).then((response) => {
          this.searchClubs = response.data.result;
          if (this.searchClubs && this.searchClubs != 'request-error') {
            this.searchTrue = true;
          } else {
            this.searchTrue = false;
            this.$message({
              message: '不存在这个华懒哦~',
              type: 'warning'
            })
          }
        })
      }
    }
  }

</script>
<style scoped>
  .item {
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .clubsRank {
    margin-top: 20px;
  }

  .rankText {
    color: rgb(9, 121, 250);
  }

  .button-indent1 {
    margin-left: 1em;
  }

  a {
    text-decoration: none;
  }

</style>
