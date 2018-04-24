<template>
  <el-row class="club-menber">
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{path:'OrgDetail', query:{'orgId':this.orgId}}">{{orgInfo.clubName}}</el-breadcrumb-item>
        <el-breadcrumb-item>成员列表</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 华懒详细信息 -->
    <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">&nbsp;</el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <el-card class="box-card">
        <div slot="header">
          <h3 class="text-primary text-indent1">{{orgInfo.clubName}}
            <router-link :to="{path:'OrgDetail', query:{'orgId':orgInfo._id}}">
              <el-button icon="el-icon-back" type="text" style="float: right; padding: 3px 0">返回首页</el-button>
            </router-link>
          </h3>
        </div>
        <div>
          <p class="text-indent1">
            <span>创始人：
              <span class="text-primary">{{orgInfo.clubCreaterName}}</span>
            </span>
          </p>
          <p class="text-indent1">
            <span>创建时间：
              <span class="time">{{orgInfo.clubCreatetime}}</span>
            </span>
          </p>
          <p class="text-indent1">
            <span>群宗旨：
              <span class="text-warning">{{orgInfo.clubDescription}}</span>
            </span>
          </p>
          <p class="text-indent1">群成员：
            <span class="text-primary">{{clubMenberLength}}</span> 人</p>
          <router-link v-for="user in orgInfo.clubMenbers" :key="user.id" :to="{path:'ContactsDetail', query:{'userId':user.userId}}">
            <el-tag class="usertag">
              {{user.userName}}
            </el-tag>
          </router-link>
          <hr>
          <p class="text-center">
            <el-button type="danger" size="small" @click="quitOrg()">退出华懒</el-button>
          </p>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <img src="/static/organization-image/menberList.jpg" alt="群资料" class="img-responsive">
    </el-col>
  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios'
  export default {
    data() {
      return {
        orgId: '',
        orgInfo: [],
        clubMenberLength: ''
      }
    },
    components: {
      NavBreadcrumb
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getMenberList();
    },
    methods: {
      getMenberList() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        this.orgId = this.$route.query.orgId;
        let param = {
          orgId: this.orgId
        }
        axios.get("/clubs/getOrgDetail", {
          params: param
        }).then((response) => {
          this.orgInfo = response.data.result;
          this.clubMenberLength = this.orgInfo.clubMenbers.length;
        })
      },
      quitOrg() {
        axios.post("/clubs/quitOrg", {
          orgId: this.$route.query.orgId
        }).then((response)=>{
          if(response.data.result == "success"){
            this.$message({
              message: '退出该华懒成功！',
              type: 'success',
              duration: 1000
            });
            this.$router.push({
              name: 'MyOrgIndex'
            });
          }
        })
      }
    }
  }

</script>
<style scoped>
  .usertag {
    margin: 2px;
  }

</style>
