<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MyOrgIndex' }">我的华懒</el-breadcrumb-item>
        <el-breadcrumb-item>用户资料</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <el-row>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        &nbsp;
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-button type="text" icon="el-icon-back" @click="goback()"></el-button>&nbsp;&nbsp;
            <span class="text-warning">{{userInfo.userName}}</span>
            <router-link :to="{path:'ContactsContent', query:{'userId':userInfo._id}}">
              <el-button style="float: right" type="primary" size="middle" round>发信息</el-button>
            </router-link>
          </div>
          <div>
            <div class="myInfo">
              <p>地址：<span class="text-primary">{{userInfo.userHostelArea}}&nbsp;{{userInfo.userHostelAddress}}</span></p>
              <p>Q Q：<span class="text-primary">{{userInfo.userQQ}}</span></p>
              <p>ta参与的华懒：
                <br>
                <router-link v-for="(orgInfo,index) in userInfo.userClubs" v-if="index<3 && isUserClubs" :key="orgInfo.value" :to="{path:'OrgDetail', query:{'orgId':orgInfo._id}}">
                  <el-tag type="primary" class="taps">{{orgInfo.clubName}}</el-tag>
                </router-link>
              </p>
              <p class="text-indent1" v-if="!isUserClubs"><span class="time">太懒了还没参加华懒哦~</span></p>
            </div>
            <div class="myTopic">
              <p>它最新发表的懒语：</p>
              <p class="text-indent1" v-if="!isUserInfo"><span class="time">太懒了还没发表懒语哦~</span></p>
              <el-card class="box-card" v-for="(userTopic, index) in sortUserInfo" v-if="index<3 && isUserInfo" :key="userTopic.value">
                <p>{{index+1}}.
                  <span class="text-primary">{{userTopic.topicTitle}}</span>
                </p>
                <p>{{userTopic.topicCreatetime}}</p>
                <p>{{userTopic.topicContent}}</p>
              </el-card>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="static/organization-image/contactsDetail.jpg" alt="联系人详情" class="img-responsive">
      </el-col>
    </el-row>

  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios'
  export default {
    data() {
      return {
        userInfo: [],
        sortUserInfo: [],
        commentLength: '',
        isUserClubs: false,
        isUserInfo: false
      }
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        let param = {
          userId: this.$route.query.userId
        }
        axios.get("/users/getUserInfo", {
          params: param
        }).then((response) => {
          this.userInfo = response.data.result;
          if(this.userInfo.userClubs.length > 0){
            this.isUserClubs = true;
          } else {
            this.isUserClubs = false;
          }
          this.sortUserInfo = this.userInfo.userTopics.reverse();
          if(this.sortUserInfo.length > 0){
            this.isUserInfo = true;
          }else {
            this.isUserInfo = false;
          }
        })
      },
      goback() {
        this.$router.go(-1);
      }
    }
  }

</script>

<style>
  .taps {
    margin-top: 15px;
    margin-left: 5px;
  }

  .text-primary {
    color: #409EFF;
  }

</style>
